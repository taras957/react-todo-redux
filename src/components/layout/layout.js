import React from "react";
import "./Layout.css";
import ShowModalBtn from "../pop-up/modalShowBtn";
import ModalForm from "../pop-up/Modal";
import TaskList from "../CurrentTasks";
import DoneTasksList from "../DoneTasks";
import { connect } from "react-redux";
import {
  setModal,
  sortByNewDate,
  sortByOldDate
} from "../../store/actions/layoutActions";

function Layout({
  modal,
  setModal,
  taskList,
  doneTasks,
  sortByNewDate,
  sortByOldDate
}) {
  let filterBtn = false;
  if ((taskList && taskList.length) || (doneTasks && doneTasks.length)) {
    filterBtn = true;
  }

  return (
    <div className="container">
      <div className="todo__top">
        <ShowModalBtn onClick={() => setModal()} />
        {modal ? <ModalForm /> : null}
        {filterBtn ? (
          <>
            <button onClick={() => sortByNewDate()}>by date new</button>
            <button onClick={() => sortByOldDate()}>by date old</button>
          </>
        ) : null}
      </div>
      <section className="currentTasks">
        {taskList && taskList.length ? (
          <TaskList tasks={taskList} />
        ) : null}
        {doneTasks && doneTasks.length ? (
          <>
            <DoneTasksList doneTasks={doneTasks} />
          </>
        ) : null}
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
    taskList: state.taskList,
    doneTasks: state.doneTasks,

  };
}
function mapDispatchToprops(dispatch, props) {
  return {
    setModal: () => dispatch(setModal()),
    sortByNewDate: () => dispatch(sortByNewDate()),
    sortByOldDate: () => dispatch(sortByOldDate())
  };
}

export default connect(mapStateToProps, mapDispatchToprops)(Layout);
