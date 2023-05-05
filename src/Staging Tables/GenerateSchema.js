import React,{useState} from 'react'
import axios from 'axios';

const GenerateSchema = () => {

    const [tableName, setTableName] = useState('');
    const [columns, setColumns] = useState([{ name: '', type: '', primaryKey: false, default: '' }]);
    
    const handleTableNameChange = (event) => {
        setTableName(event.target.value);
      };


    const handleColumnChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    setColumns(prevColumns => {
        const updatedColumns = [...prevColumns];
        updatedColumns[index][name] = type === 'checkbox' ? checked : value;
        return updatedColumns;
    });
    };

    const handleAddColumn = () => {
        setColumns(prevColumns => [...prevColumns, { name: '', type: '', primaryKey: false, default: '' }]);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

    const sql = `CREATE TABLE ${tableName} (${columns.map(column => `${column.name} ${column.type}${column.primaryKey ? ' PRIMARY KEY' : ''}${column.default ? ` DEFAULT ${column.default}` : ''}`).join(', ')});`;
    
        axios.post('http://192.168.29.128/api/ConfigValidations',{sql})    
        .then(response => {setColumns('Table created successfully:', response.data)})
        .catch(error => {console.error('Error creating table:', error);        
          console.log(sql)
        });
      };
  return (
    <div className='container m-2'>
        <form onSubmit={handleSubmit} className='form-control '>
            <label className='m-3'>
                Table name:
                <input type="text" className='m-1' value={tableName} onChange={handleTableNameChange} />
            </label>
            {columns.map((column, index) => (
                <div key={index} className='m-2'>
                    <label className='m-2' >
                        Column name:
                        <input type="text" className='m-1' name="name" value={column.name} onChange={event => handleColumnChange(event, index)} />
                    </label>
                    <label className='m-2'>
                        Column type:
                        <input type="text"className='m-1' name="type" value={column.type} onChange={event => handleColumnChange(event, index)} />
                    </label>
                    <label className='m-2'> 
                        Primary key:
                        <input type="checkbox" className='m-1' name="primaryKey" ch ecked={column.primaryKey} onChange={event => handleColumnChange(event, index)} />
                    </label>
                    <label className='m-2'>
                        Default value:
                        <input type="text" className='m-1' name="default" value={column.default} onChange={event => handleColumnChange(event, index)} />
                    </label>
                </div>
            ))}
        <div className='m-3 '>
            <button type="button" onClick={handleAddColumn} className='m-2 btn btn-warning'>Add column</button>
            <button type="submit" className='m-2 btn btn-warning '>Create table</button>
        </div>
        </form>         
    </div>
  )
}

export default GenerateSchema