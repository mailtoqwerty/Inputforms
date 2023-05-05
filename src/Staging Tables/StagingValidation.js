import React, { useState } from 'react'

const StagingValidation = () => {
    const[data,setData]=useState({
        fileName:'',
        fieldName:'',
        width:'',
        datatype:'',
        precision:'',
        mandatory:'',
        defaultvalue

    })
  return (
    <div className='container form-control'>       
    <div className='col'>
        <table className='  table table-bordered ' >
            <thead>
                <tr className='   bg-warning  '>
                    <th className='p-2'>FileName</th>   
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
                            <td>{item.fileName}</td>
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

export default StagingValidation