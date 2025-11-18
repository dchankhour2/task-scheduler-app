import React from 'react';
import { useTasks } from '../context/TasksContext';

const DeleteTask: React.FC = ({ taskToDelete, setOpenDeleteTask }) => {

    const { deleteTask } = useTasks();

    const handleConfirmDelete = () => {
        deleteTask(taskToDelete.id);
        setOpenDeleteTask(false);
    }
    
    return (
       <div className="space-y-4">
            <p className="text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold">
                    "{taskToDelete?.title}"
                </span>
            </p>
            <div className="flex justify-center space-x-3">
                <button 
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Delete
                </button>
            </div>
       </div>
    )
}

export default DeleteTask;
