import React, {useEffect, useState } from 'react'
    import axios from 'axios';

const ConfigValidation = () => {
    const[data,setData]=useState([]);  
    
    useEffect(()=>{
        axios.get('http://192.168.29.128/api/ConfigValidations')
        .then(res=>setData(res.data))            
        .catch(error => {console.error(error)})

    },[]);       

    const deletvalidatios=(fileName)=>{
        axios.delete(`http://192.168.29.128/api/ConfigValidations/${fileName}`)
        .then(responce=>{
            setData(data.filter(item=>item.fileName !==fileName))
        })
        .catch(error => console.log(error));
    }

  return (
    <div className='container form-control'>       
        <div className='col'>
        <h3><strong><center>Field_Level_Configuration</center></strong></h3>
            <table className='  table table-bordered ' >
                <thead>
                    <tr className='   bg-warning  '>
                        <th className='p-2'>BatchId</th>   
                        <th className='p-2'>Field</th>                            
                        <th className='p-2'>Width</th>  
                        <th className='p-2'>DataType</th>   
                        <th className='p-2'>Precision</th>                              
                        <th className='p-2'>Mandatory</th>   
                        <th className='p-2'>Default_Validation</th>   
                    </tr>
                </thead>
                       
                {
                    data.map((item,id)=>{
                        return(
                            <tr key={id}>
                                <td>{item.batchId}</td>
                                <td>{item.field}</td>
                                <td>{item.width}</td>
                                <td>{item.dataType}</td>
                                <td>{item.precision}</td>
                                <td>{item.mandatory}</td>
                                <td>{item.defaultValidation}</td>
                                <td><button onClick={()=>deletvalidatios(item.fileName)}>Delete</button></td>
                            </tr>
                        )
                    })
                }                        
            </table>
        </div>                       
    </div>
  )
}

export default ConfigValidation