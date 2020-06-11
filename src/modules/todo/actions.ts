import { ADD_TODO, AddTodoAction, ChangeTodoStatusAction, CHANGE_STATUS } from "./const"
import { Todo } from "../../entities"
import { TodoStatus } from "../../types/TodoStatus"

export function addTodo(newTodo: Todo): AddTodoAction {
    return {
        type: ADD_TODO,
        payload: {
            newTodo,
        }
    }
}

export function changeTodoStatus(todoId: string, newStatus: TodoStatus): ChangeTodoStatusAction {
    return {
        type: CHANGE_STATUS,
        payload: {
            todoId,
            newStatus,
        }
    }
}