import React from 'react'
import TaskItem from './task'
import {connect} from 'react-redux'
import PropTypes from "prop-types";




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
             isDone ={item.isDone}
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

 TaskList.propTypes = {
   taskList: PropTypes.arrayOf(PropTypes.object)
 };

export default connect(mapStateToProps)(TaskList);