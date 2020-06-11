import { Todo } from "../../entities";
import { TodoStatus } from "../../types/TodoStatus";

export const ADD_TODO = 'todo/ADD';
export const CHANGE_STATUS = 'todo/CHANGE_STATUS';

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: {
        newTodo: Todo;
    }
}

export interface ChangeTodoStatusAction {
    type: typeof CHANGE_STATUS
    payload: {
        todoId: string;
        newStatus: TodoStatus;
    }
}

export type TodoActionTypes =
    | AddTodoAction
    | ChangeTodoStatusAction;