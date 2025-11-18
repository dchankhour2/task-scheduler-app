import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { authService } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import { Task } from '../types';

type TasksContextShape = {
  tasks: Task[];
  addTask: (task: Partial<Task>) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  reload: () => Promise<void>;
};

const TasksContext = createContext<TasksContextShape | null>(null);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);

  const load = useCallback(async () => {
    if (!user) {
      setTasks([]);
      return;
    }
    const userTasks = authService.getTasksForUser(user.id);
    setTasks(Array.isArray(userTasks) ? userTasks : []);
  }, [user]);

  useEffect(() => {
    void load();

    const onStorage = (e: StorageEvent) => {
      // when users or current user changes, reload
      if (e.key === 'task-scheduler:users' || e.key === 'task-scheduler:currentUser' || (e.key && e.key.startsWith('tasks:'))) {
        void load();
      }
    };

    const onTasksUpdated = (ev: Event) => {
      const detail = (ev as CustomEvent).detail as { userId?: string } | undefined;
      if (!user) return;
      if (!detail || !detail.userId || detail.userId === user.id) {
        void load();
      }
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('tasksUpdated', onTasksUpdated as EventListener);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('tasksUpdated', onTasksUpdated as EventListener);
    };
  }, [load, user]);

  const persistAndNotify = async (nextTasks: Task[]) => {
    if (!user) return;
    authService.saveTasksForUser(user.id, nextTasks);
    setTasks(nextTasks);
    window.dispatchEvent(new CustomEvent('tasksUpdated', { detail: { userId: user.id } }));
  };

  const addTask = (task: Partial<Task>) => {
    if (!user) throw new Error('Not authenticated');
    const t: Task = {
      id: task.id ?? String(Date.now()),
      title: task.title ?? '',
      completed: task.completed ?? false,
      userId: user.id,
      ...(task as any),
    };
    persistAndNotify([...tasks, t]);
  };

  const updateTask = (task: Task) => {
    if (!user) throw new Error('Not authenticated');
    const updated = tasks.map((t) => (t.id === task.id && t.userId === user.id ? task : t));
    persistAndNotify(updated);
  };

  const deleteTask = (id: string) => {
    if (!user) throw new Error('Not authenticated');
    const updated = tasks.filter((t) => !(t.id === id && t.userId === user.id));
    persistAndNotify(updated);
  };

  const toggleTaskCompletion = (id: string) => {
    if (!user) throw new Error('Not authenticated');
    const updated = tasks.map((t) => (t.id === id && t.userId === user.id ? { ...t, completed: !t.completed } : t));
    persistAndNotify(updated);
  };

  const reload = async () => {
    await load();
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTaskCompletion, reload }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = (): TasksContextShape => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error('useTasks must be used within TasksProvider');
  return ctx;
};