export const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    return usernameRegex.test(username);
};

export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
};

export const validateTaskTitle = (title: string): boolean => {
    return title.trim().length > 0;
};

export const validateTaskDate = (date: string): boolean => {
    return !isNaN(Date.parse(date));
};