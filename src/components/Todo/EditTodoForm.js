import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setvalue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
       
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Update task' value={value} onChange={(e) => setvalue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
        {console.log(task.task)}
    </form>
  )
}