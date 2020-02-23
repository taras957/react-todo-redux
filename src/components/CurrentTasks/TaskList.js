import React from 'react'
import TaskItem from './task'
import {connect} from 'react-redux'


function TaskList({ taskList }) {
   return (
     <ul className="taskList">
       {taskList.map(item => {
         return (
           <TaskItem
             key={item.id}
             id={item.id}
             text={item.description}
             date={item.date}
           />
         );
       })}
     </ul>
   );
 }



 function mapStateToProps(state) {
   return  {
    taskList: state.taskList,
   }
 }

export default connect(mapStateToProps)(TaskList);