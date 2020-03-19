const initialState = {
    todosList: [{
        id: 1,
        text: "Primeira tarefa do redux",
        complete: false
    },
    {
        id: 2,
        text: "Segunda tarefa do redux",
        complete: true
    }],
};

export const todos = (state = initialState, action) => {    
    console.log("ACTION", action);
    console.log("STATE", state);

    switch(action.type) {
        case "ADD_TASK":
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                complete: false
            };
            return {
                todosList: [newTodo, ...state.todosList]
            }
        case "TOGGLE_TASK":
            {const newTodoList = state.todosList.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }
                return todo;
            });
            return {
                todosList: newTodoList
            };}
        case "DELETE_TASK":
            {const newTodosList = state.todosList.filter(todo => {
                if (todo.id === action.payload.id) {
                    return false
                }
                return true;
            })
            return {
                todosList: newTodosList
            };}
        default:
            return state;
    }
}