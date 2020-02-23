import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromDone  } from "../../../store/actions/layoutActions";
import { connect } from "react-redux";

function CreateDoneTask({
  text,
  date,
  id,
  removeFromDone
}) {
  return (
    <li className="task__done" id={id}>
      <div className="task__text">
        <p>{text} </p>
        <p>{date} </p>
      </div>
      <button
        aria-label="delete"
        className="task__delete"
        onClick={e => {
            removeFromDone(e.target.closest(".task__done").id);
        }}
      >
        <DeleteIcon fontSize="large" />
      </button>
    </li>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromDone: (taskId) => dispatch(removeFromDone(taskId))
  };
}

export default connect(null, mapDispatchToProps)(CreateDoneTask);
