import logo from './assets/img/logo_checkmark.png';
import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
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
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Header />
        <Button />
      </header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <p style={{ color: 'red'}}>Nothing to show</p>}
      <Footer />
    </div>
  );
}

export default App;
