export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    
};

export interface  TodosProps {
    todos: Todo[];
    handleRemove: (id:string) => void
    handleCompleted: (id:string) => void
};
