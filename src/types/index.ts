export interface User {
    username: string;
    password: string;
}

export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    recurring: boolean;
    userId?: string;
    dueDate?: Date;
    recurrenceRule?: string;
}