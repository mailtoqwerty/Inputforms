import React from 'react'

const ConfigNormalization = () => {
  return (
    <div className='container mt-5'>
        <div className='form-contral'>
            <h3><strong><center>Normalization_Configuration_Details</center></strong></h3>
            <table className=' table table-bordered' >
               <thead>
               <tr className='   bg-warning  text-light'>
                    <th>FileName</th>
                    <th>FieldName</th>
                    <th>TableName</th>
                    <th>ColumnName</th>
                </tr>
                {/* {
                    data.map((item,id)=>{
                        return(
                            <tr>
                                <td>{item.fileName}</td>
                                <td>{item.fieldName}</td>
                                <td>{item.tableName}</td>
                                <ttd>{item.columnName}</ttd>
                            </tr>
                        )
                    })
                } */}
               </thead>
            </table>
        </div>        
    </div>
  )
}

export default ConfigNormalization