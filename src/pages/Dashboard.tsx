import React, { useState } from 'react';
import { useTasks } from '../context/TasksContext';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import DeleteTask from '../components/DeleteTask';
import Modal from '../components/Elements/Modal';
import SearchTask from '../components/Elements/Search';
import { Task } from '../types';

const Dashboard: React.FC = () => {
    const [openAddTask, setOpenAddTask] = useState(false);
    const [openDeleteTask, setOpenDeleteTask] = useState(false);
    const [currentTask, setCurrentTask] = useState<Task | null>(null);
    const { tasks, deleteTask } = useTasks();

    //Search
    const [searchTerm, setSearchTerm] = useState("");
    const [filterDate, setFilterDate] = useState("");

    const filteredTasks = tasks.filter((task) => {
        const tDesc = task.description ? task.description : '';
        const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tDesc.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = filterDate
        ? (task.dueDate ? (new Date(task.dueDate as any).toISOString().slice(0,10) === filterDate) : false)
        : true;

        return matchesSearch && matchesDate;
    });

    const openDeleteTaskModal = (task: Task) => {
        setCurrentTask(task);
        setOpenDeleteTask(true);
    }

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
                openDeleteTaskModal={openDeleteTaskModal} 
                onDeleteTask={deleteTask}
            />
            {openAddTask && (
                <AddTask setOpenAddTask={setOpenAddTask} />
            )}

            {openDeleteTask && (
                <DeleteTask
                    setOpenDeleteTask={setOpenDeleteTask}
                    taskToDelete={currentTask} />
            )}
        </div>
    );
};

export default Dashboard;