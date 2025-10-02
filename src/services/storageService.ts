export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasks = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

export const deleteTask = (taskId) => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveTasks(updatedTasks);
};

export const updateTask = (updatedTask) => {
    const tasks = getTasks();
    const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
    if (taskIndex > -1) {
        tasks[taskIndex] = updatedTask;
        saveTasks(tasks);
    }
};

export const markTaskAsCompleted = (taskId) => {
    const tasks = getTasks();
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex > -1) {
        tasks[taskIndex].completed = true;
        saveTasks(tasks);
    }
};