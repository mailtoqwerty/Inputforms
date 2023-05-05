import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../App.css'


const Extraction = () => {
const[data,setData]=useState([]);
// const [updateData, setUpdateData] = useState({
//     fileName: '',
//     tableName: '',
//     numOfFields: '',
//     contentType:'',
//     delimiter:''
//   });



useEffect(() => {
  
  axios.get('http://192.168.29.128/api/ConfigExtractions')
      .then(response => {setData(response.data)})
      .catch(error => {console.error(error)})
    
  }, []);

  const handleDelete = (fileName) => {
    axios.delete(`http://192.168.29.128/api/ConfigExtractions/${fileName}`)
      .then(response => {
        setData( data.filter(item => item.fileName !== fileName));
      })
      .catch(error => console.log(error));
  };

 

  // const update=(fileName)=>{
  //   axios.put(`http://192.168.29.128/api/ConfigExtractions/${updateData.fileName}`, { fileName: updateData.fileName })
  //   .then(response=>{
  //     setData(data.map(item => (item.id === updateData.id ? response.data : item)));
  //     setUpdateData({
  //       fileName: ''  
  //     })
  //   })
  // }


    
  return (
    <div className='container form-control'>       
      <div className='col'>           
        <table className='table table-bordered table-striped ' >
          <thead>
            <tr className='bg-warning text-light '>
              <th className='p-2 '>BatchId</th>   
              <th className='p-2 '>FileName</th>   
              <th className='p-2'>TableName</th>                            
              <th className='p-2'>Num_Of_Fields</th>  
              <th className='p-2'>ContentType</th>  
              <th className='p-2'>Delimiter</th>   
              <th className='p-2'>SequenceOrder</th>
              <th className='p-2'>Predecessor</th>
              <th className='p-2'>Normalization</th>
              <th className='p-2'>ProgramName</th>
                                        
            </tr>
                                                
            {
              data.map((item,id)=>{
                return(
                <tr key={id} className='text-dark '>
                  <td>{item.batchId}</td>
                  <td>{item.fileName}</td>
                  <td>{item.tableName}</td>
                  <td>{item.numOfFields}</td>
                  <td>{item.contentType}</td>
                  <td>{item.delimiter}</td>
                  <td>{item.sequenceOrder}</td>
                  <td>{item.predecessor}</td>
                  <td>{item.noemalization}</td>
                  <td>{item.programName}</td>

                  <th>
                    {/* <button onClick={() => update(item.fileName)}>Edit</button> */}
                    <button onClick={() => handleDelete(item.fileName)} >Delete</button></th>
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

export default Extraction