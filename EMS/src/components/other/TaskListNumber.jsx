import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex gap-10  w-full pt-10 '>
      <div className='bg-green-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>0</h3>
        <h3 className='text-3xl font-semibold'>New Project</h3>
      </div>
      <div className='bg-red-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>0</h3>
        <h3 className='text-3xl font-semibold'>Not completed</h3>
      </div>
      <div className='bg-blue-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>0</h3>
        <h3 className='text-3xl font-semibold'>New Project</h3>
      </div>
      <div className='bg-yellow-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>0</h3>
        <h3 className='text-3xl font-semibold'>In progress </h3>
      </div>
    </div>
  )
}

export default TaskListNumber
