import React from 'react'


const TaskListNumber = ({data}) => {
  
  return (
    <div className='flex gap-10  w-full pt-10 '>
      <div className='bg-green-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>{data.taskCounts.active}</h3>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-red-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>{data.taskCounts.completed}</h3>
        <h3 className='text-3xl font-semibold'>Completed Task</h3>
      </div>
      <div className='bg-blue-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>{data.taskCounts.newTask}</h3>
        <h3 className='text-3xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-yellow-500 w-[45%] p-5 rounded-2xl'>
        <h3 className='text-5xl font-semibold'>{data.taskCounts.failed}</h3>
        <h3 className='text-3xl font-semibold'>Failed Task </h3>
      </div>
    </div>
  )
}

export default TaskListNumber
