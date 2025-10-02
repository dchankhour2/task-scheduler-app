import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import { Task } from '../types';

const TaskEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { tasks, addTask, updateTask } = useTasks();
    const [task, setTask] = useState<Task | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchedTask = tasks.find((t) => t.id === id);
            if (fetchedTask) {
                setTask(fetchedTask);
                setTitle(fetchedTask.title);
                setDescription(fetchedTask.description);
                setDueDate(fetchedTask.dueDate);
                setIsRecurring(fetchedTask.isRecurring);
            }
        }
    }, [id, tasks]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: id || Date.now().toString(),
            title,
            description,
            dueDate,
            isRecurring,
        };

        if (id) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isRecurring}
                            onChange={(e) => setIsRecurring(e.target.checked)}
                        />
                        Recurring
                    </label>
                </div>
                <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
            </form>
        </div>
    );
};

export default TaskEditor;