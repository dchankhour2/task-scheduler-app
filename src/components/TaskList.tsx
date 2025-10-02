import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onUpdateTask={onUpdateTask} 
            onDeleteTask={onDeleteTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;