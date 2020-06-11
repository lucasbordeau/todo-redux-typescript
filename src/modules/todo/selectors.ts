import { RootState } from "../store";

export const getTodoArray = (state: RootState) => state.todos.todoArray;
export const getTodoById = (state: RootState, todoId: string) => state.todos.todoArray.find(t => t.id === todoId);