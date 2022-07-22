import React from 'react'

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-contol'>
            <label htmlFor="task">Task</label>
                <input 
                id='task'
                name='text'
                type="text"
                placeholder='Add your task here'
                required
                />
        </div>

        <div className='add-form'>
            <label htmlFor="day">Day & Time</label>
                <input 
                id='day'
                name='day'
                type="text"
                placeholder='Add Day & Time Here'
                required
                />
        </div>
        <input type="submit" value='Save Task' />
    </form>
  )
}

export default AddTask