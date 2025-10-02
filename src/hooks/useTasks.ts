import { useState, useEffect } from 'react';
import { Task } from '../types';

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const saveTasksToLocalStorage = (tasks: Task[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = (task: Task) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const updateTask = (updatedTask: Task) => {
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const toggleTaskCompletion = (taskId: string) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskCompletion,
    };
};

export default useTasks;