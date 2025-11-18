import { createPasswordRecord, verifyPassword } from './cryptoAuth';

type PublicUser = { id: string; username: string };
type PasswordRecord = { salt: string; iterations: number; hash: string };
type StoredUser = {
  id: string;
  username: string;
  passwordRecord: PasswordRecord;
  // plain tasks stored on the user record (used for now until server-side move)
  tasks?: any[];
};

const USERS_KEY = 'task-scheduler:users';
const CURRENT_USER_KEY = 'task-scheduler:currentUser';

const readUsers = (): StoredUser[] =>
  JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

const writeUsers = (users: StoredUser[]) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

const makeId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? (crypto as any).randomUUID()
    : String(Date.now());

export const authService = {
  // Create user: store password as a secure PBKDF2-derived record and initialize encrypted empty tasks
  signup: async (username: string, password: string): Promise<PublicUser> => {
    const users = readUsers();
    if (users.find((u) => u.username === username)) {
      throw new Error('Username already exists');
    }

    const id = makeId();
    const passwordRecord = await createPasswordRecord(password);

    const newUser: StoredUser = {
      id,
      username,
      passwordRecord,
      tasks: [],
    };

    users.push(newUser);
    writeUsers(users);

    const publicUser: PublicUser = { id, username };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    return publicUser;
  },

  // Verify password using the stored record. On success set current user.
  login: async (username: string, password: string): Promise<PublicUser> => {
    const users = readUsers();
    const found = users.find((u) => u.username === username);
    if (!found) {
      throw new Error('Invalid credentials');
    }

    const ok = await verifyPassword(password, found.passwordRecord);
    if (!ok) throw new Error('Invalid credentials');

    const publicUser: PublicUser = { id: found.id, username: found.username };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    return publicUser;
  },

  logout: (): void => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): PublicUser | null => {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null');
  },
  
  getTasksForUser: (userId: string): any[] => {
    const users = readUsers();
    const found = users.find((u) => u.id === userId);
    if (!found) return [];
    return Array.isArray(found.tasks) ? found.tasks : [];
  },

  saveTasksForUser: (userId: string, tasks: any[]): void => {
    const users = readUsers();
    const idx = users.findIndex((u) => u.id === userId);
    if (idx === -1) throw new Error('User not found');
    users[idx].tasks = tasks;
    writeUsers(users);
  },
};