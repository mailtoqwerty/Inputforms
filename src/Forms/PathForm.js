import React, { useState } from 'react'
import PathTable from '../Tables/PathTable'

const PathForm = () => {
    const [data,setData]=useState({
        id:'',
        filename:'',
        filePath:''
    })

    const{id,fileName,filePath}=data

    const handelchange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handelSubmit=e=>{
        e.preventDefault();

    }

  return (
    <div className='container row m-5'>
        <div className='col'>
            <form className='form-control' onSubmit={handelSubmit}>
                <div className='m-2'>
                    <div><lable><strong>ID:</strong></lable></div>
                    <input type='number'  className='form-control' placeholder='ID' name='id' value={id} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                    <div><lable><strong>FileName:</strong></lable></div>
                    <input type='text'  className='form-control' placeholder='FileName' name='fileName' value={fileName} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                   <div> <lable><strong>FilePath:</strong></lable></div>
                    <input type='text' className='form-control' placeholder='FilePath' name='filePath' value={filePath} onChange={handelchange}/>
                </div>
                <div className='row mt-2 justify-content-center'>
                    <div className='  col-5'>
                        <button type='submit'  className='btn btn-warning form-control' >Submit</button>
                    </div>                
                </div>
            </form>
        </div>
        <div className='col'>
            <PathTable/>

        </div>
    </div>
  )
}

export default PathForm