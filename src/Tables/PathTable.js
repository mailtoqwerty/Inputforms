import axios from 'axios';
import React, { useEffect,useState } from 'react'

const PathTable = () => {
    const[data,setData]=useState([]);    
    async function fetchData() {
        try{
            const Path = await axios.get('URL').then(res=>(setData(res.data)))
        }catch(error){
            console.log(error);
        }       
    };

    // const handeldelete=(id)=>{
    //     axios.delete(`URL/${id}`).then(res=>{
    //         setData(data.filter(item=>item.id!==id));
    //     })
    // }
  return (
    <div className='container'>
        <table className=' table table-bordered table-striped' >
            <thead >
                <tr className='bg-warning text-light '>
                    <th>Id</th>
                    <th>FileName</th>
                    <th>FilePath</th>
                </tr>
          
            {/* {
                data.map((item,id=>{
                    return(
                        <tr key={id}>
                            <td>{item.id}</td>
                            <td>{item.fileName}</td>
                            <td>{item.path}</td>
                            <td><button onClick={()=>handeldelete(item.id)}>Delete</button></td>
                        </tr>
                    )
                }))
            }    */}
            </thead>
        </table>
    </div>
  )
}

export default PathTable