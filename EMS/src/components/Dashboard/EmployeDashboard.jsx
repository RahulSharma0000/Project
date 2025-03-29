import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = () => {
  return (
    <div className='p-10'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeDashboard
