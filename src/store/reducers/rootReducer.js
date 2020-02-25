import {
  SET_MODAL,
  SET_TASK,
  REMOVE_FROM_LIST,
  SET_DONE_TASK,
  SORT_BY_DATE,
  IS_EDIT,
} from "../actions/actionTypes";

const initialState = {
  modal: false,
  taskList: [],
  editTask: {
    editTask: false,
    editComplete: false,
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
      return {
        ...state,
        taskList: state.taskList.map(task =>
          task.id === action.payload
            ? {
                ...task,
                isDone: !task.isDone
              }
            : task
        )
      };

    case SORT_BY_DATE:
      let predicate;
     if (action.payload=== 'old') {
    predicate =  (a, b) => new Date(a.date) - new Date(b.date);
     }else {
       predicate =  (a, b) => new Date(b.date) - new Date(a.date)
     }
      return {
        ...state,
        taskList: [
          ...state.taskList.sort(predicate)
        ]
      };

    case IS_EDIT:
      return {
        ...state,
        editTask: {...state.editTask, editTask: !state.editTask.editTask, taskId: action.payload }
      };

    default:
      return state;
  }
}


