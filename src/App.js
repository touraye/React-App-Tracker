import { useState } from "react"
import Header from "./components/Header"
import Task from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th 1:30am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th 5:00pm',
            reminder: false,
        }
    ] )
  
  //Toggle AddTask Form
  const [ showAddTask, setShowAddTask ] = useState( false )
  
  
  //Add Task
  const addTask = (task) => {
    const id = ~~( Math.random() * 1000 ) + 1
    
    const newTask = { ...task, id }
    setTasks( [ ...tasks, newTask ] )
    
  }
  
  // Delete Event
  const deleteTask = (id) => {
    setTasks( tasks.filter( ( task ) => task.id !== id ) )
    
  }

  //Toggle Reminder
  const toggleReminder = ( id ) => {
    setTasks( tasks.map( ( task ) => task.id === id ? { ...task, reminder: !task.reminder } : task ) )
    
  }
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="React Task Tracker" />
      {showAddTask && <AddTask onAdd={ addTask } /> }
      { tasks.length > 0 ? <Task tasks={ tasks } onDelete={ deleteTask } onToggle={toggleReminder} /> : 'No Task' }      
    </div>
  );
}

export default App;
