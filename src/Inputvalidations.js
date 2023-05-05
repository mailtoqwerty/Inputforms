import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Inputvalidations = () => {
    const [data,setData]=useState('');
    const[netdata,setNetdata]=useState('');
    const [getdata,setGetdata]=useState([]);
    const add=()=>{
        if(!data){
            return
        }else{
            setGetdata([...getdata,data]);
            setData('');
            console.log(data);
        }
    }
    const handler=(e)=>{
        setNetdata ({...netdata,[e.target.name]:e.target.value})
        
       

    }
 useEffect=(()=>{
 axios.get('').then(response=>setData(response.data))
            
},[])
const submithandler=e=>{
    e.preventDefault();
    console.log (data);
//toPost The Data to An URL
    useEffect=(async()=>{          
            axios.post('', {
            field: '',
            filename: '',
            width: '',
            DataType:'',
            Precision:'',
           })
         .then(res =>setData(res.data))
        .catch(console.log())      
        },[]);
    }     
  return (
    <div className='container mt-5' width={50}>
        <div className='col-md-2'></div>
        <div className ='col-md-8'>
            <div>
                <form className='form-control' onSubmit={submithandler}>
                    <div  >
                        <input className='form-control' type={'text'} placeholder='Filed' onChange={handler}/>
                    </div>
                    <div >
                        <input className='form-control' type={'text'} placeholder='file' onChange={handler} />
                    </div>
                    <div>
                        <input className='form-control' type={'text'} placeholder='width' onChange={handler}/>
                    </div>
                    <div>
                    <input  className='form-control' type={'text'} placeholder='data-type' onChange={handler}/>
                    </div>
                    <div>
                        <input  className='form-control' type={'text'} placeholder='Precision'onChange={handler}/>
                    </div>
                    <div className=''>
                        <button type='submit' onClick={add} className='btn btn-primary' >Submit</button>
                    </div>
                </form>
                <div>
                    {getdata.map((item,id)=>{
                        return (
                            <div key={id}>
                                {item}
                            </div>
                        )
                    })}
                    {/* {data.map((item,id)=>{                  */}
                        <table >
                            <tr>
                                <th>Filed</th>
                                <th>File</th>
                                <th>Width</th>
                                <th>DataType</th>
                                <th>Precision</th>
                            </tr>
                            {/* <tr>
                                <td>{item.fileName}</td>
                                <td>{item.tableName}</td>
                                <td>{item.numOfFields}</td>
                                <td>{item.contentType}</td>
                                <td>{item.delimiter}</td>
                            </tr> */}
                        </table>
                    {/* })}                     */}
                </div>
            </div>
        </div>
        <div className='col-md-2'></div>
    </div>
  )
}
export default Inputvalidations;