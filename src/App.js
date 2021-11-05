
import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
{
id: 1,
text: 'Doctors Appt',
day: 'Feb 5th at 2:30pm',
reminder: true,  
},
{
id: 2,
text: 'Doctors Appt',
day: 'Feb 6th at 8:30am',
reminder: true,  
},
{
id: 3,
text: 'Doctors Appt',
day: 'Feb 7th at 12:30pm',
reminder: false,  
}
]
)
const addTask = ( task ) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className="App">
      <header className="App-header">
        <Header 
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}/>
      </header>
      {showAddTask && <AddTask onAdd={ addTask }/>}
      <hr/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p style={{ color: 'red'}}>Nothing to show</p>}
      <Footer />
    </div>
  );
}

export default App;
