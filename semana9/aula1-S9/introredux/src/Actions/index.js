const addTask = (valor) => {
    return {
        typer: "ADD_TASK",
        payload: {
            valor: valor
        }
    }
}

const removeTask = (valor) => {
    return {
        typer: "REMOVE_TASK",
        payload: {
            valor: valor
        }
    }
}

const removeAllTasks = (valor) => {
    return {
        typer: "REMOVE_ALL_TASKS",
        payload: {
            valor: valor
        }
    }
}

const filterByAll = (valor) => {
    return {
        type: "FILTER_BY_ALL",
        payload: {
            valor: valor
        }
    }
}

const filterByIncomplete = (valor) => {
    return {
        type: "FILTER_BY_INCOMPLETE",
        payload: {
            valor: valor
        }
    }
}

const filterByComplete = (valor) => {
    return {
        type: "FILTER_BY_COMPLETE",
        payload: {
            valor: valor
        }
    }
}