import {
  SET_MODAL,
  SET_TASK,
  REMOVE_FROM_LIST,
  SET_DONE_TASK,
  REMOVE_FROM_DONE,
  SORT_BY_NEW_DATE,
  SORT_BY_OLD_DATE,
  IS_EDIT
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
export function isDone(taskId){
    return {
        type:SET_DONE_TASK,
        payload: taskId
    }
}
export function removeFromDone(taskId){
    return {
        type: REMOVE_FROM_DONE,
        payload: taskId
    }
}

export function sortByNewDate(){
    return {
      type: SORT_BY_NEW_DATE,
    };
}
export function sortByOldDate(){
    return {
      type: SORT_BY_OLD_DATE,
    };
}

export function isEdit(taskId) {
    return {
        type: IS_EDIT,
        payload: taskId
    }
}