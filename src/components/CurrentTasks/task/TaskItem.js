import React from "react";
import cn from "classnames";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  removeFromList,
  setModal,
  isEdit,
  setDone
} from "../../../store/actions/layoutActions";
import { connect } from "react-redux";
import  './taskItem.css'
import PropTypes from "prop-types";


 function TaskItem({
   text,
   date,
   id,
   removeFromList,
   setDone,
   isDone,
   setModal,
   isEdit
 }) {


  let taskStatus = cn('task',{'unDone': !isDone, 'done':isDone});

  
   return (
     <li className={taskStatus} id={id}>
       <button
         className={"task__done-toggle"}
         type="checkbox"
         onClick={e => {
           setDone(e.target.closest(".task").id);
         }}
       >
         <DoneOutlineIcon />
       </button>
       <div className="task__text">
         <p>{text} </p>
         <p>{date} </p>
       </div>
       <button
         onClick={e => {
           isEdit(e.target.closest(".task").id);
           setModal();
         }}
       >
         Edit
       </button>
       <button
         className="task__delete"
         onClick={e => {
           removeFromList(e.target.closest(".task").id);
         }}
       >
         <DeleteIcon fontSize="large" />
       </button>
     </li>
   );
 }
 const mapDispatchToProps= {
     removeFromList,
     setDone,
     setModal,
     isEdit,
 }

   TaskItem.propTypes = {
     text: PropTypes.string,
     date: PropTypes.string,
     id: PropTypes.string,
     setDone: PropTypes.func,
     isDone: PropTypes.bool,
     setModal: PropTypes.func,
     isEdit: PropTypes.func,
     removeFromList: PropTypes.func
   };
 export default connect(null,mapDispatchToProps)(TaskItem);