import React, { useEffect, useState } from 'react'
import { Axios } from 'axios'

const Detafetch = () => {
    const[data,setData]=useState('');
    //fetch the data from API
    const Fecth= async()=>{
       const myfetch= await Axios.get('').then(res=>res.data)

    }
    useEffect=(()=>{
        Fecth();
    },[])
  return ( 
    <div className='container'>       
        <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className=''>
                <div >
                    <table className='mt-5  table' >
                        <trow className='d-inline-flex   bg-warning '>
                            <thead className='p-2 '>FileName</thead>   
                            <thead className='p-2'>TableName</thead>                            
                            <thead className='p-2'>Num_Of_Fields</thead>  
                            <thead className='p-2'>Delimiter</thead>                              
                        </trow>
                        <trow>
                            {/* {
                                data.map((item,id)=>{
                                    return(
                                        <div key={id}>
                                            <tdata>{item.FileName}</tdata>
                                            <tdata>{item.TableName}</tdata>
                                            <tdata>{item.Num_Of_Fields}</tdata>
                                            <tdata>{item.Delimiter}</tdata>
                                        </div>
                                        )
                                })
                            } */}
                        </trow>
                    </table>
                </div>
            </div>
        </div>
              
    </div>
  )
}

export default Detafetch


