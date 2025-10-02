import React from 'react';

interface TaskItemProps {
    task: {
        id: string;
        title: string;
        completed: boolean;
        recurring: boolean;
    };
    onUpdate: (id: string) => void;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete, onToggleComplete }) => {
    return (
        <div className="task-item">
            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
            <button onClick={() => onToggleComplete(task.id)}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => onUpdate(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;