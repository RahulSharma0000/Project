import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData =useContext(AuthContext)
 
  

  return (
    <div id='AllTask' className='bg-[#1c1c1c]  p-5 mt-5 rounded  '>
      <div className='bg-white mb-2 py-2 px-4 flex justify-between items-center rounded text-black'>
        <h2 className='text-lg font-medium w-1/5w-1/5'>Employee Name </h2>
        <h3 className='text-lg font-medium w-1/5w-1/5'>New Task</h3>
        <h4 className='text-lg font-medium w-1/5w-1/5'>Active Task </h4> 
        <h4 className='text-lg font-medium w-1/5w-1/5'>completed </h4> 
       <h4  className='text-lg font-medium w-1/5w-1/5'>Failed</h4> 
      </div>

      <div className='h-[80%] overflow-auto'>
        {authData.employees.map(function(elem,idx){

return  <div key={idx} className='border-green-500 border-2 mb-2 py-2 px-4 flex justify-between items-center rounded'>
<h2  className='text-lg font-medium w-1/5'>{elem.firstName} </h2>
<h3  className='text-lg font-medium w-1/5'>{elem.taskCounts.newTask}</h3>
<h4  className='text-lg font-medium w-1/5'>{elem.taskCounts.active} </h4> 
<h4  className='text-lg font-medium w-1/5'>{elem.taskCounts.completed}</h4> 
<h4  className='text-lg font-medium w-1/5'>{elem.taskCounts.failed}</h4> 
</div>
})}</div>
      
      
      
      
      
    </div>
  )
}

export default AllTask
