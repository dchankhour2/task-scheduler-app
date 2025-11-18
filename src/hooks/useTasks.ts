import { useEffect, useState } from 'react';
import { Task } from '../types';
import { authService } from '../services/authService';
import { useAuth } from './useAuth';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const auth = useAuth();

  const loadTasksForCurrentUser = async () => {
    const cur = authService.getCurrentUser();
    if (!cur) {
      setTasks([]);
      return;
    }

    // load tasks stored on the user record
    const userTasks = authService.getTasksForUser(cur.id);
    setTasks(Array.isArray(userTasks) ? userTasks : []);
  };

  useEffect(() => {
    // load (async) — ignore returned promise
    void loadTasksForCurrentUser();

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'task-scheduler:currentUser' || (e.key && e.key.startsWith('tasks:'))) {
        loadTasksForCurrentUser();
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);

  const saveTasks = async (nextTasks: Task[]) => {
    const cur = authService.getCurrentUser();
    if (!cur) return;
    authService.saveTasksForUser(cur.id, nextTasks);
    setTasks(nextTasks);
  };

  const addTask = (task: Task) => {
    const cur = authService.getCurrentUser();
    if (!cur) throw new Error('Not authenticated');
    const t = { ...task, id: task.id ?? String(Date.now()), userId: cur.id };
    const updated = [...tasks, t];
    void saveTasks(updated);
  };

  const updateTask = (updatedTask: Task) => {
    const cur = authService.getCurrentUser();
    if (!cur) throw new Error('Not authenticated');
    const updated = tasks.map((t) => (t.id === updatedTask.id && t.userId === cur.id ? updatedTask : t));
    void saveTasks(updated);
  };

  const deleteTask = (taskId: string) => {
    const cur = authService.getCurrentUser();
    if (!cur) throw new Error('Not authenticated');
    const updated = tasks.filter((t) => !(t.id === taskId && t.userId === cur.id));
    void saveTasks(updated);
  };

  const toggleTaskCompletion = (taskId: string) => {
    const cur = authService.getCurrentUser();
    if (!cur) throw new Error('Not authenticated');
    const updated = tasks.map((t) => (t.id === taskId && t.userId === cur.id ? { ...t, completed: !t.completed } : t));
    void saveTasks(updated);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    reload: loadTasksForCurrentUser,
  };
};

export default useTasks;