type PublicUser = { id: string; username: string };

const USERS_KEY = 'task-scheduler:users';
const CURRENT_USER_KEY = 'task-scheduler:currentUser';

type StoredUser = { id: string; username: string; password: string };

const readUsers = (): StoredUser[] =>
  JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

const writeUsers = (users: StoredUser[]) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

const makeId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? (crypto as any).randomUUID()
    : String(Date.now());

export const authService = {
  signup: async (username: string, password: string): Promise<PublicUser> => {
    const users = readUsers();
    if (users.find(u => u.username === username)) {
      throw new Error('Username already exists');
    }
    const id = makeId();
    const newUser: StoredUser = { id, username, password };
    users.push(newUser);
    writeUsers(users);
    const publicUser: PublicUser = { id, username };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    return publicUser;
  },

  login: async (username: string, password: string): Promise<PublicUser> => {
    const users = readUsers();
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) {
      throw new Error('Invalid credentials');
    }
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
};