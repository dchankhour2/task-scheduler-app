import React, { useState } from 'react';
import { useTasks } from '../context/TasksContext';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import DeleteTask from '../components/DeleteTask';
import Modal from '../components/Elements/Modal';
import SearchTask from '../components/Elements/Search';

const Dashboard: React.FC = () => {
    const [openAddTask, setOpenAddTask] = useState(false);
    const [openDeleteTask, setOpenDeleteTask] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const { tasks, updateTask, toggleTaskCompletion, deleteTask } = useTasks();

    console.log('list of tasks', tasks);

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

    const openDeleteTaskModal = (task) => {
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
                <Modal 
                    title="Add Task">
                    <AddTask 
                        setOpenAddTask={setOpenAddTask} />
                </Modal>
            )}
            {openDeleteTask && (
                <Modal 
                    title="Delete Task">
                    <DeleteTask 
                        setOpenDeleteTask={setOpenDeleteTask}
                        taskToDelete={currentTask} />
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;