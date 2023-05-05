import React,{ useState} from 'react'
import '../App.css'
import axios from 'axios'
import Extraction from '../Tables/Extraction'

const Extractionform = () => {
 
    const [inputValues, setInputValues] = useState({
      batchId:'', 
      fileName: '',
      tableName: '',
      numOfFields: '',
      contentType:'',
      delimiter:'',
      sequenceOrder:'',
      predecessor:'',
      normalization:'',
      programName:''
    });

    const{batchId,fileName,tableName,numOfFields,contentType,delimiter,sequenceOrder,predecessor,normalization,programName}=inputValues

    const handleInputChange = (e) => {
      setInputValues({...inputValues,[e.target.name]:e.target.value})

    };
    
    const handleSubmit = e => {
      e.preventDefault();

    const data = {
      batchId: batchId,
      fileName: fileName,
      tableName: tableName,
      numOfFields: numOfFields,
      contentType: contentType,
      delimiter: delimiter,
      sequenceOrder:sequenceOrder,
      predecessor:predecessor,
      normalization:normalization,
      programName:programName

    };
      
      axios.post('http://192.168.29.128/api/ConfigExtractions', data)
        .then(response => {setInputValues(response.data)})
        .catch(error => {console.error(error)});       
        
    };     

  return (
    <div className='row m-5 '>       
      <div className="col ">
        <form className='formtransparent form-control' onSubmit={handleSubmit}>  
          <div className='input-field'>
          <div className='row mt-2 ' >
          <div><lable><strong>BatchID:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='BatchId'name='batchId' value={batchId} onChange={handleInputChange}/>
          </div>             
          <div className='mt-2 ' >
          <div><lable><strong>FileName:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='FileName'name='fileName' value={fileName} onChange={handleInputChange}/>
          </div>
          <div className='mt-2' >
          <div><lable><strong>TableName:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='TableName' name='tableName' value={tableName}  onChange={handleInputChange} />
          </div>              
          <div className='mt-2'>
          <div><lable><strong>Num_Of_Fields:</strong></lable></div>
            <input className='form-control' type={'number'} placeholder='Num_Of_Fields' name='numOfFields' value={numOfFields} onChange={handleInputChange}/>
          </div>
          <div className='mt-2'>
          <div><lable><strong>ContentType:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='ContentType' name='contentType' value={contentType}  onChange={handleInputChange}/>
          </div>  
          <div className='mt-2'>
          <div><lable><strong>Dekimiter:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='Delimiter' name='delimiter' value={delimiter} onChange={handleInputChange}/>
          </div>  
          <div className='mt-2'>
          <div><lable><strong>SequenceOrder:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='SequenceOrder' name='sequenceOrder' value={sequenceOrder}  onChange={handleInputChange}/>
          </div>  
          <div className='mt-2'>
          <div><lable><strong>Predecessor:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='Predecessor' name='predecessor' value={predecessor} onChange={handleInputChange}/>
          </div>    
          <div className='mt-2'>
          <div><lable><strong>Normalization:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='Normalization' name='normalization' value={normalization}  onChange={handleInputChange}/>
          </div>  
          <div className='mt-2'>
          <div><lable><strong>ProgramName:</strong></lable></div>
            <input className='form-control' type={'text'} placeholder='ProgramName' name='programName' value={programName} onChange={handleInputChange}/>
          </div>           
          <div className='row mt-2 justify-content-center'>
            <div className=' ml-5 col-6'>
              <button type='submit' className='btn btn-warning form-control'>Submit</button>
            </div>
          </div>
          </div>
        </form>
        
      </div>
        <div className="col ">
          <div className=''>
            <Extraction/>
          </div>            
         </div>          
    </div>
  )
}
export default Extractionform