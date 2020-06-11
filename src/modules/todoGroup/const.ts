import { TodoGroup } from "../../entities";
import { TodoStatus } from "../../types/TodoStatus";

export const ADD_TODO_GROUP = 'todoGroup/ADD';
export const DELETE_TODO_GROUP = 'todoGroup/DELETE';

export interface AddTodoGroupAction {
    type: typeof ADD_TODO_GROUP;
    payload: {
        newTodoGroup: TodoGroup;
    }
}

export interface DeleteTodoGroupAction {
    type: typeof DELETE_TODO_GROUP
    payload: {
        todoGroupId: string;
    }
}

export type TodoGroupActionTypes =
    | AddTodoGroupAction
    | DeleteTodoGroupAction;