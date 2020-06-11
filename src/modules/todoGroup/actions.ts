import { AddTodoGroupAction, ADD_TODO_GROUP, DeleteTodoGroupAction, DELETE_TODO_GROUP } from "./const"
import { Todo, TodoGroup } from "../../entities"
import { TodoStatus } from "../../types/TodoStatus"

export function addTodoGroup(newTodoGroup: TodoGroup): AddTodoGroupAction {
    return {
        type: ADD_TODO_GROUP,
        payload: {
            newTodoGroup,
        }
    }
}

export function deleteTodoGroup(todoGroupId: string): DeleteTodoGroupAction {
    return {
        type: DELETE_TODO_GROUP,
        payload: {
            todoGroupId
        }
    }
}