import React from 'react'

const NewTask = () => {
  return (
    <div className=" p-5 rounded-xl flex-shrink-0 bg-pink-400 h-[15rem] w-[20rem]">
    <div className="flex justify-between items-center ">
      <h3 className=" font-semibold bg-red-500 p-1 rounded-xl">High</h3>
      <h3>20 March 2025</h3>
    </div>
    <h2 className="mt-5 text-2xl font-semibold ">Make a youtube vedio for new content</h2>
    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm '>Accept</button>
        <button className='bg-red-500 py-1 px-2 text-sm '>Decline</button>
      </div>
    </div>
  )
}

export default NewTask
