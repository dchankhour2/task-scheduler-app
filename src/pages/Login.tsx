import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await login(username, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Welcome back
                </h2>
                <p className="text-center text-gray-600">
                    Sign in to access your account.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-sm font-medium text-gray-700' htmlFor="username">Username</label>
                        <input
                            type="text" 
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='className="block text-sm font-medium text-gray-700' htmlFor="password">Password</label>
                        <input
                            type="password" 
                            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div className="mt-1 relative">
                        <button 
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5' 
                            type="submit">Login
                        </button>
                    </div>
                </form>
                <button><Link to="/signup">Signup</Link></button>
            </div>
        </div>
    );
};

export default Login;