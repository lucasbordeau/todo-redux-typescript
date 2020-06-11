import { TodoGroupActionTypes, ADD_TODO_GROUP, DELETE_TODO_GROUP } from "./const";
import { Todo, TodoGroup } from "../../entities"
import { produce } from "immer";

interface TodoGroupState {
    todoGroupArray: TodoGroup[];
}

const initialState: TodoGroupState = {
    todoGroupArray: []
}

export function todoGroupReducer(
    state = initialState,
    action: TodoGroupActionTypes
): TodoGroupState {
    switch (action.type) {
        case ADD_TODO_GROUP:
            return produce(state, (draft) => {
                draft.todoGroupArray.push(action.payload.newTodoGroup);
            })
        case DELETE_TODO_GROUP:
            return produce(state, (draft) => {
                const foundTodoGroupIndex = draft.todoGroupArray.findIndex(t => t.id === action.payload.todoGroupId);

                if (foundTodoGroupIndex) {
                    draft.todoGroupArray.splice(foundTodoGroupIndex, 1);
                }
            })
        default:
            return state
    }
}