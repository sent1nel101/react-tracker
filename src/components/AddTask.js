import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add task.')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label className='form-label'>Task</label><br/>
                    <input type='text' placeholder='add task' value={text} onChange={(e) => setText(e.target.value)}/>                
            </div>
            <div className='form-control'>
                <label className='form-label'>Day & Time</label><br/>
                    <input type='datetime-local' placeholder='add day & time' value={day} onChange={(e) => setDay(e.target.value)}/>                
            </div>
            <div className='form-control'>
                <label className='form-label'>Set Reminder</label>
                    <input type='checkbox'  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>                
            </div>
            <input className='btn btn-block' type='submit' value='Save Task'/>
        </form>
        
    )
}

export default AddTask
