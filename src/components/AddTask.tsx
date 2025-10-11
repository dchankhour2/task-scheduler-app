import React, { useState } from 'react';
import useTasks from '../hooks/useTasks';

const AddTask: React.FC = ({ setOpenAddTask }) => {

    const { addTask } = useTasks()
    
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        recurring: false,
        dueDate: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const addNewTask = () => {
        if (!formData.title.trim()) return;

        const newTask = {
            id: Date.now(),
            ...formData,
        };

        addTask(newTask);
        setOpenAddTask(false);
    };
    
    return (
       <div className="space-y-4">
            <div>
                <label className="block text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Task details..."
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="recurring"
                  name="recurring"
                  checked={formData.recurring}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="recurring" className="text-gray-700">Recurring Task</label>
            </div>
            <div>
                <label className="block text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button 
                onClick={addNewTask}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add Task
            </button>
       </div>
    )
}

export default AddTask;
