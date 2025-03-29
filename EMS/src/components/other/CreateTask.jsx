import React from 'react'

const CreateTask = () => {
  return (
    
         <div className='p-10 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                  <div>
                    <h3 className='text-xl text-gray-300 p-1 mt-2 '>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='text' placeholder='Task Title'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1 mt-1 '>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='date'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1  mt-1'>Asign To</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1' type='text' placeholder='Employee Name'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1  mt-1'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='text' placeholder='Design,dev,testing etc'  /> 
                  
                    </div>
                    
                    
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-xl text-gray-300 mb-0.5 p-1'>Discription </h3>
                    <textarea name="" id="" cols="70" rows="9" className='text-sm text-gray-300 mb-0.5 border-2'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-embrald-600 rounded-xl px-50 mt-5 '>Create task</button>
                    </div>
            </form>

      
      
    </div>
  )
}

export default CreateTask
