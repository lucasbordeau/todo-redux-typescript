import { Todo } from "./Todo";

export interface TodoGroup {
    id: string;
    name: string;
    todoArray?: Todo[];
}