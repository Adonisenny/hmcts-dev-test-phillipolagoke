
import './App.css';
import { useState } from 'react';

function App() {

  const [title,setTitle] =useState('')
  const [description, setDescription] =useState('')
  const [status, setStatus]= useState('NEW')
  const [duedate,setDuedate] =useState('')
  const[result,setResult] =useState(null)
  const [loading,setLoading] =useState(false)
  const [error, setError] =useState(false)
  const handleSubmit = async(e)=> {
e.preventDefault()
setLoading(true)
setResult(null)
setError('')

try {
  const theres = await fetch('http://localhost:3000/api/tasks',{
  method:'POST',
  headers:{'Content-Type':'application/json' },
  body:JSON.stringify({title,description, status,duedate}),
})
const data = await theres.json()
if(!theres.okay){
  setError(data.message|| 'something not right')

}else{
  setResult(data)
  setDescription('')
    setTitle('')
    setStatus('NEW')
    setDuedate('')
  
}
} catch (error) {
  setError('Network error')
}finally{
  setLoading(false)
}

  }
  return (
    <div className='app'>
    <div className='card'>
<h1 className='title'>HMTCS Task</h1>
   <p className="subtitle">
          Interface to create tasks via the backend API.
        </p>

<form onSubmit={handleSubmit} className='form'>
  
  <div className='form-group'>
    <label>Title</label>
    <input 
    type='text'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    style={{width:'100%', padding:8}}
    />
    
    
</div>
<div className='form-group'>
  <label>Description</label>

    <textarea
    value={description}
    rows={3}
    onChange={(e) => setDescription(e.target.value)}
     style={{width:'100%', padding:8}}
    >
      
      </textarea> 
</div>


<div className='form-row'>
  <div className='form-group half'>
  <label>Status</label>
<select
value={status}
onChange={(e) => setStatus(e.target.value)}
 style={{width:'100%', padding:12}}
>
  <option value='NEW'>NEW</option>
    <option value='IN_PROGRESS'>IN PROGRESS</option>
     <option value='DONE'>DONE</option>


</select>

</div>
</div>

<div className='form-group half'>
  <label>Due Date</label>
  <input
  
  type='date'
  value={duedate}
  onChange={(e) => setDuedate(e.target.value)}

   style={{width:'100%', padding:12}}
  
  />
</div>
<button type='submit' disabled={loading} className='btn'>
{loading? 'creating': 'create task'}
</button>

</form>


{error && <p className='error'>{error}</p>}


{result && (
  <div className='result'>
  <h2>Task has been created</h2>
  <p><strong>Message:</strong>{result?.message}</p>
  <p><strong>Titles</strong>{result?.task?.title}</p>
  {result?.task?.description && (
    <p><strong>Description:</strong>{result?.task?.description}</p>
  )}
   <p><strong>Status:</strong>{result?.task?.status}</p>
  
     <p><strong>Due Date:</strong>{new Date(result?.status?.duedate).toLocaleDateString()}</p>
     <p><strong>ID:</strong>{result?.tasK?._id}</p>
  </div>
)}
</div>
    
    </div>
  );
}



export default App;
