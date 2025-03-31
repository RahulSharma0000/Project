import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = (props) => {
  return (
    <div className='p-10'>
     
      <Header changeUser={props.cha} data ={props.data}/>
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeDashboard
