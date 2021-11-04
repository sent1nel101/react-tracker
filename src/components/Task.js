import React from 'react'
import reactDom from 'react-dom'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <div class="tasksContainer">
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)} />
        </div>
    )
}

export default Task
