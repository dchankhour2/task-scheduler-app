# Task Scheduler Web Application

## Overview
This project is a task scheduler web application that allows users to create, update, delete, and manage tasks with options for marking them as completed or recurring. The application includes a simple login system for user authentication, and all data is stored locally in the browser.

## Features
- User authentication with signup and login functionality
- Create, update, delete, and manage tasks
- Mark tasks as completed or set them as recurring
- Responsive and user-friendly interface

## Technology Stack
- **Frontend**: React, TypeScript
- **State Management**: Context API or Redux
- **Routing**: React Router
- **Local Storage**: For storing user credentials and tasks
- **Build Tool**: Vite

## Project Structure
```
task-scheduler-app
├── public
│   └── index.html
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── pages
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Dashboard.tsx
│   │   └── TaskEditor.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskItem.tsx
│   │   └── RecurrenceEditor.tsx
│   ├── hooks
│   │   ├── useAuth.ts
│   │   └── useTasks.ts
│   ├── services
│   │   ├── authService.ts
│   │   └── storageService.ts
│   ├── store
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── validators.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-scheduler-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- **Signup**: Create a new account by providing a username and password.
- **Login**: Access your account using your credentials.
- **Dashboard**: View your tasks, create new tasks, and manage existing ones.
- **Task Editor**: Add or edit tasks with options for setting dates and recurrence.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.