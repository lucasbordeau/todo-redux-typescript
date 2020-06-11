import { TodoStatus } from "../types/TodoStatus";

export interface Todo {
    id: string;
    description: string;
    createdAt: Date;
    dueDate?: Date;
    status: TodoStatus;
}