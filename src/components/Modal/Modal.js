import React, { useState, useEffect} from "react";
import moment from "moment";
import { connect } from "react-redux";
import { setModal, setTask, isEdit,removeFromList} from "../../store/actions/layoutActions";
import  './Modal.css'
import { Modal } from "@material-ui/core";
import PropTypes from "prop-types";



function dateValidation(str) {
  return moment(str).isAfter(moment()) || moment(str).isSame(moment(), "day");
}




function ModalForm({
  setModal,
  setTask,
  editTask,
  taskList,
  isEdit,
  removeFromList
}) {
  const [currenTask, setCurrentTask] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");
  const [errorName, setError] = useState(false);
  const [dateValid, SetDateValid] = useState(false);


  function handleSubmit(e) {
    const toDoItem = {
      description: inputValue,
      id: (Math.random() * 9999).toFixed(5),
      date: date,
      isDone: false,
    };
  
      setCurrentTask(toDoItem);
    setInputValue("");
    setDate("");
  }

  useEffect(() => {
    if (editTask.editTask) {

      const task = taskList.filter(task => task.id === editTask.taskId);
      setInputValue(task[0].description);
      setDate(task[0].date);

    }
  }, [editTask.editTask, editTask.taskId, taskList,isEdit,removeFromList]);





  return (
    <div
      className="overlay"
      onClick={e => {
        if (e.target.closest(".pop-up")) {
          return;
        }
        setModal();
      }}
    >
      <div className="pop-up">
        <button className="circle-close" onClick={() => setModal()}></button>
        <form
          onSubmit={e => {
            e.preventDefault();
            setTask(currenTask);

            setModal();
          }}
          className="form"
        >
          <label className="pop-up__label">
            Task
            <input
              className="name"
              placeholder="Task name"
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              name="inputValue"
            />
            {errorName ? <span className="error">Enter task name</span> : null}
          </label>
          <label className="pop-up__label">
            Dead line
            <input
              type="date"
              placeholder='MM-DD-YYYY"'
              className="date"
              onChange={e => setDate(e.target.value)}
              value={date}
              name="date"
            />
            {dateValid ? <span className="error">Enter valid date</span> : null}
          </label>
          <button
            className="pop-up__btn"
            onClick={e => {
              if (!inputValue.length) {
                e.preventDefault();
                setError(!errorName);
              } else if (!dateValidation(date)) {
                e.preventDefault();
                SetDateValid(!dateValid);

                return;
              } else {
                if(editTask.editTask){
                  removeFromList(editTask.taskId);
                  isEdit(null)
                }
                handleSubmit(e);
              }
            }}
          >
            Add new task
          </button>
        </form>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    modal: state.modal,
    taskList: state.taskList,
    doneTasks: state.doneTasks,
    editTask: state.editTask
  };
}



const mapDispatchToProps = {
  setModal,
  setTask,
  removeFromList,
  isEdit
};


Modal.propTypes = {
  setModal: PropTypes.func,
  setTask: PropTypes.func,
  editTask: PropTypes.func,
  taskList: PropTypes.arrayOf(PropTypes.object),
  isEdit: PropTypes.func,
  removeFromList: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
