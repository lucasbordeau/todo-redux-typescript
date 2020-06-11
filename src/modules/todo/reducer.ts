import { Todo } from "../../entities"
import { ADD_TODO, TodoActionTypes, CHANGE_STATUS } from "./const"
import { produce } from "immer";

interface TodoState {
    todoArray: Todo[];
}

const initialState: TodoState = {
    todoArray: []
}

export function todoReducer(
    state = initialState,
    action: TodoActionTypes
): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return produce(state, (draft) => {
                draft.todoArray.push(action.payload.newTodo);
            })
        case CHANGE_STATUS:
            return produce(state, (draft) => {
                const foundTodo = draft.todoArray.find(t => t.id === action.payload.todoId);

                if (foundTodo) {
                    foundTodo.status = action.payload.newStatus;
                }
            })
        default:
            return state
    }
}