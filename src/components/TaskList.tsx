import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  openDeleteTaskModal: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  openEditModal?: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, openDeleteTaskModal, onDeleteTask, openEditModal }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Tasks</h2>
      <ul className="divide-y divide-gray-200">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            openDeleteTaskModal={openDeleteTaskModal} 
            onDeleteTask={onDeleteTask} 
            openEditModal={openEditModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;