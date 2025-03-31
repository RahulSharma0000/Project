import React from 'react'
import { useEffect,useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) =>{
   e.preventDefault()
  
   setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,comleted:false})
   const data = JSON.parse(localStorage.getItem('employees'))

  data.forEach(function(elem){
   if (asignTo == elem.firstName) {
   elem.tasks.push(newTask)
   elem.taskCounts.newTask =elem.taskCounts.newTask+1
 
   }
    
  })
  localStorage.setItem('employees',JSON.stringify(data))

  setTaskTitle('')
  setTaskDescription('')
  setTaskDate('')
  setAsignTo('')
  setCategory('')

   
  //  console.log(task);
   
  }

  return (
    
         <div className='p-10 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                  <div>
                    <h3 className='text-xl text-gray-300 p-1 mt-2 '>Task Title</h3>
                    <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='text' placeholder='Task Title'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1 mt-1 '>Date</h3>
                    <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='date'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1  mt-1'>Asign To</h3>
                    <input value={asignTo} onChange={(e)=>{setAsignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1' type='text' placeholder='Employee Name'  /> 
                    </div>
                    <div>
                    <h3 className='text-xl text-gray-300 p-1  mt-1'>Category</h3>
                    <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-0.5 border-2 p-1 ' type='text' placeholder='Design,dev,testing etc'  /> 
                  
                    </div>
                    
                    
                </div>
                <div value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-xl text-gray-300 mb-0.5 p-1'>Discription </h3>
                    <textarea name="" id="" cols="70" rows="9" className='text-sm text-gray-300 mb-0.5 border-2'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-embrald-600 rounded-xl px-50 mt-5 '>Create task</button>
                    </div>
            </form>

      
      
    </div>
  )
}

export default CreateTask
