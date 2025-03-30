import React from 'react'

const AcceptTask = ({data}) => {
  
  
  return (
    <div className=" p-5 rounded-xl flex-shrink-0 bg-blue-500 h-[15rem] w-[20rem]">
      <div className="flex justify-between items-center ">
        <h3 className=" font-semibold bg-red-500 p-1 rounded-xl">{data.category}</h3>
        <h3>{data.taskDate}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm '>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm '>'Mark as failed</button>
      </div>
      </div>
  )
}

export default AcceptTask
