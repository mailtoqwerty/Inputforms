import React ,{useState,useEffect}from 'react';
import axios from 'axios';


const TransfConfiguration = () => {

    const[data,setData]=useState([]);
    useEffect(() => {
  
        axios.get('http://192.168.29.128/api/ConfigTransformations')
            .then(response => {setData(response.data)})
            .catch(error => {console.error(error)})
             
        }, []);
      
        const deletetransfer = (fileName) => {
          axios.delete(`http://192.168.29.128/api/ConfigTransformations/${fileName}`)
            .then(response => {
              setData( data.filter(item => item.fileName !== fileName));
            })
            .catch(error => console.log(error));
        };
      
  return (
    <div className='container form-control ' >       
        <div className='col'> 
            <table className='table table-bordered table-striped' >
                <thead> 
                    <tr className='bg-warning   bg-warning '>
                        <th className='p-2'>FileName</th>   
                        <th className='p-2'>FieldName</th>                            
                        <th className='p-2'>Source</th>  
                        <th className='p-2'>Destination</th>    
                        <th className='p-2'>Derivation_Function</th>                              
                        <th className='p-2'>Transf_Type</th>                          
                    </tr>                   
                
                {
                    data.map((item,id)=>{
                        return(
                            <tr key={id}>
                                <td>{item.fileName}</td>
                                <td>{item.fieldName}</td>
                                <td>{item.source}</td>
                                <td>{item.destination}</td>
                                <td>{item.derivationFunction}</td>
                                <td>{item.transfType}</td>
                                <th><button onClick={()=>deletetransfer(item.fileName)}>Delete</button></th>
                            </tr>
                        )
                    })
                }
                </thead>                 
            </table>
        </div>                 
    </div>
  )
}

export default TransfConfiguration;