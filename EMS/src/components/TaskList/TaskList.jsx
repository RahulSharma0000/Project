import React from "react";
import AcceptTask from "./acceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className=" overflow-x-auto   h-[30rem] w-full flex flex-nowrap justify-start items-center gap-10"
    >
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return  <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return   <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return  <CompleteTask key={idx} data={elem}/>
         }
         if(elem.failed){
          return  <FailedTask key={idx} data={elem}/>
         }
        
      })}

    </div>
  );
};

export default TaskList;
