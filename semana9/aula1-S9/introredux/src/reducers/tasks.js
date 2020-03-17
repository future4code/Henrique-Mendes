import { addTask } from "../actions";
import { removeTask } from "../actions";


const initialState = {
    task: task,    
};

const tasks = (state = state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, task: action.payload.task }
        case 'REMOVE_TASK':
            return {...state, task: action.payload.task }
        case 'MARK_TASK':
            return {...state, task: action.payload.task }
        default:
            return state
    }
};

export default tasks;