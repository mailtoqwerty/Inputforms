import React from 'react'


import { useState } from 'react';

const Loading = () => {
  const [data,setData]=useState(''); 
  const[newdata,setNewdata]=useState([]);
    const add=()=>{
      if(!data ){
        return null
      }else{ 
          setNewdata([...newdata,data]);
          setData('');           
      }     
    }

  const handler=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
  }
  
  return (          
    <div className='container'>
      <div className='center'>
        
          <input type={'text'}  placeholder='FineName'  onChange={handler}/>
      </div>
      <div className='center'>
          <input type={'text'} placeholder='TableName'  onChange={handler}/>
      </div>
      <div className='center'>
          <input type={'text'} placeholder='No of Filds'  onChange={handler}/>
      </div>
      <div className='center'>
          <input type={'text'} placeholder='Delimiter'  onChange={handler}/>
      </div>
      <div className='center'>
          <button onClick={add}>Submit</button>           
      </div>
  
      <div className='container'>
        {
          data.map((item,id)=>{
            return( 
                <div className=''>
                    <table className='table table-border'>
                        <tr>
                            <th>FileName</th>
                            <th>TableName</th>
                            <th>No of Filds</th>
                            <th>Delimiter</th>                                     
                        </tr>
                        <tr key={id}>
                            <td>{item.filename}</td>
                            <td>{item.tablename}</td>
                            <td>{item.filds}</td>
                            <td>{item.delimiter}</td>
                        </tr>
                    </table>                                             
                </div>                        
                )                   
            })
            }    
       </div>   
      </div>   
  )
}

export default Loading