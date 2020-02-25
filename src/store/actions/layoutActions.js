import {
  SET_MODAL,
  SET_TASK,
  REMOVE_FROM_LIST,
  SET_DONE_TASK,
  SORT_BY_DATE,
  IS_EDIT,
} from "./actionTypes";

export function setModal() {
    return {
        type: SET_MODAL
    }
};
export function setTask(task) {
 return {
     type: SET_TASK,
     payload: task
 }
}


export function removeFromList(taskID){
    return {
        type: REMOVE_FROM_LIST,
        payload: taskID
    }
}
export function setDone(taskId){
    return {
        type:SET_DONE_TASK,
        payload: taskId
    }
}

export function sortByDate(predicate){
    return {
      type: SORT_BY_DATE,
      payload: predicate
    };
}


export function isEdit(taskId) {
    return {
        type: IS_EDIT,
        payload: taskId
    }
}
