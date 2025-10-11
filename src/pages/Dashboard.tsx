import React, { useState } from 'react';
import useTasks from '../hooks/useTasks';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import Modal from '../components/Elements/Modal';
import SearchTask from '../components/Elements/Search';

const Dashboard: React.FC = () => {
    const [openAddTask, setOpenAddTask] = useState(false)
    const { tasks, updateTask, deleteTask, toggleTaskCompletion } = useTasks();

    //Search
    const [searchTerm, setSearchTerm] = useState("");
    const [filterDate, setFilterDate] = useState("");

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = filterDate
        ? task.dueDate === filterDate
        : true;

        return matchesSearch && matchesDate;
    });

    return (
       <div className="min-h-screen bg-gray-100 p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <button
                    onClick={() => setOpenAddTask(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                + Add Task
                </button>
            </header>
            <SearchTask 
                searchTerm={searchTerm} 
                filterDate={filterDate} 
                setSearchTerm={setSearchTerm} 
                setFilterDate={setFilterDate}
                 />
            <TaskList 
                tasks={filteredTasks} 
                onUpdate={updateTask} 
                onDelete={deleteTask} 
                onToggleCompletion={toggleTaskCompletion} 
            />
            {openAddTask && (
                <Modal>
                    <AddTask 
                        setOpenAddTask={setOpenAddTask} />
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;