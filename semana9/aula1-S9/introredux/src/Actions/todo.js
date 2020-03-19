export const addTask = (text) => {
    return {
        type: "ADD_TASK",
        payload: {
            text: text
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: {
            id: id
        }
    }
}

export const toggleTask = (id) => {
    return {
        type: "TOGGLE_TASK",
        payload: {
            id: id
        }
    }
}

export const toggleAllTask = () => {
    return {
        type: "TOGGLE_ALL_TASK",
    }
}


export const deleteCompleteTasks = () => {
    return {
        type: "DELETE_COMPLETE_TASKS",
    }
}

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        payload: {
            filter: filter
        }
    }
}