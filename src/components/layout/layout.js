import React from "react";
import "./layout.css";
import ShowModalBtn from "../Modal/modalShowBtn";
import ModalForm from "../Modal/Modal";
import TaskList from "../CurrentTasks";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setModal,
  sortByDate,
} from "../../store/actions/layoutActions";




function Layout({
  modal,
  setModal,
  taskList,
  sortByDate,
}) {
  let filterBtn = false;
  if ((taskList && taskList.length)) {
    filterBtn = true;
  }

  return (
    <div className="container">
      <div className="todo__top">
        <ShowModalBtn onClick={() => setModal()} />
        {modal ? <ModalForm /> : null}
        {filterBtn ? (
          <>
            <button
              className="sortByDate button"
              onClick={() =>
                sortByDate('new')
              }
            >
              by date new
            </button>
            <button
              className="sortByDate button"
              onClick={() =>
                sortByDate('old')
              }
            >
              by date old
            </button>
          </>
        ) : null}
      </div>
      <section className="currentTasks">
        {taskList && taskList.length ? <TaskList tasks={taskList} /> : null}
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
    taskList: state.taskList,
  };
}


const  mapDispatchToprops = {

    setModal,
    sortByDate,

}


Layout.propTypes = {
  taskList: PropTypes.array,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  sortByDate:PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToprops)(Layout);

