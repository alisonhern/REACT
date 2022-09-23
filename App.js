import{useState} from 'react'
import './App.css';

function App() {

const [ newTaskName, setNewTaskName ] =   useState()

const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('tasks', newTaskName)
  setNewTaskName('')
}

  return (
    <div className="App">

      <form onSubmit={}>
      <input 
       type="text" 
       placeholder='Enter a new task'
       value={newTaskName}
       onChange={(e) => setNewTaskName(e.target.value)} />

      <button>save task</button>
      </form>
      
    </div>
  );
}

export default App;
