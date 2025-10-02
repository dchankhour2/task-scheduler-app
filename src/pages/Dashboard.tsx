import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskList from '../components/TaskList';
import TaskEditor from './TaskEditor';

const Dashboard: React.FC = () => {
    const { tasks, addTask, updateTask, deleteTask, toggleTaskCompletion } = useTasks();

    return (
        <div>
            <h1>Task Dashboard</h1>
            <TaskEditor onCreate={addTask} />
            <TaskList 
                tasks={tasks} 
                onUpdate={updateTask} 
                onDelete={deleteTask} 
                onToggleCompletion={toggleTaskCompletion} 
            />
        </div>
    );
};

export default Dashboard;