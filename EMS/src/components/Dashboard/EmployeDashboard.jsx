import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = ({data}) => {
  return (
    <div className='p-10'>
     
      <Header data ={data}/>
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeDashboard
