import {
  SET_MODAL,
  SET_TASK,
  REMOVE_FROM_LIST,
  SET_DONE_TASK,
  REMOVE_FROM_DONE,
  SORT_BY_NEW_DATE,
  SORT_BY_OLD_DATE,
  IS_EDIT
} from "../actions/actionTypes";
const initialState = {
  modal: false,
  taskList: [],
  doneTasks: [],
  editTask: {
    isEdit: false,
    taskId: null
  }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal
      };

    case SET_TASK:
      return {
        ...state,
        taskList: state.taskList.concat(action.payload)
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        taskList: state.taskList.filter(el => el.id !== action.payload)
      };
    case SET_DONE_TASK:
      const newTask = state.taskList.filter(task => task.id === action.payload);
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.payload),
        doneTasks: state.doneTasks.concat(newTask[0])
      };
    case REMOVE_FROM_DONE:
      return {
        ...state,
        doneTasks: state.doneTasks.filter(el => el.id !== action.payload)
      };
    case SORT_BY_NEW_DATE:
      return {
        ...state,
        taskList: [
          ...state.taskList.sort((a, b) => new Date(a.date) - new Date(b.date))
        ]
      };
    case SORT_BY_OLD_DATE:
      return {
        ...state,
        taskList: [
          ...state.taskList.sort((a, b) => new Date(b.date) - new Date(a.date))
        ]
      };
    case IS_EDIT:
      console.log("test");

      return {
        ...state,
        editTask: { editTask: !state.editTask.editTask, taskId: action.payload }
      };
    default:
      return state;
  }
}
