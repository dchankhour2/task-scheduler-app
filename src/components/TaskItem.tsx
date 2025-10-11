import React from 'react';
import { Edit, Trash2, Repeat, Calendar } from "lucide-react";

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
        <li key={task.id} className="py-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-gray-800">{task.title}</h3>
                    {task.description && (
                      <p className="text-gray-600 text-sm">{task.description}</p>
                    )}
                    <div className="text-sm text-gray-500 mt-1">
                        {task.dueDate && <><Calendar className='inline-block' /> Due: {task.dueDate}</>}{" "}
                        {task.recurring && (
                            <span className="ml-2 inline-block text-blue-600 font-medium"><Repeat /></span>
                        )}
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button
                      onClick={() => openEditModal(task)}
                      className="text-yellow-500 hover:text-yellow-600"
                      title="Edit"
                    ><Edit className="w-5 h-5" /></button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    ><Trash2 className="w-5 h-5" /></button>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;