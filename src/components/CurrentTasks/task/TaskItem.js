import React from "react";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromList, isDone,setModal, isEdit} from "../../../store/actions/layoutActions";
import { connect } from "react-redux";




 function TaskItem({
   text,
   date,
   id,
   removeFromList,
   isDone,
   setModal,
   isEdit
 }) {
   return (
     <li className="task" id={id}>
       <button
         className={"task__done-toggle"}
         type="checkbox"
         onClick={e => {
           isDone(e.target.closest(".task").id);
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
 function mapDispatchToProps(dispatch) {
   return {
     removeFromList: taskId => dispatch(removeFromList(taskId)),
     isDone: taskId => dispatch(isDone(taskId)),
     setModal: () => dispatch(setModal()),
     isEdit: (taskId) => dispatch( isEdit(taskId))
   };
 }

 export default connect(null,mapDispatchToProps)(TaskItem);