import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { validateUsername, validatePassword } from '../utils/validators';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!validateUsername(username) || !validatePassword(password)) {
            setError('Invalid username or password');
            return;
        }

        try {
            await authService.signup(username, password);
            navigate('/');
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <form className="space-y-6" onSubmit={handleSignup}>
                    <div>
                        <label className='block text-sm font-medium text-gray-700' htmlFor="username">Username</label>
                        <input
                            type="text" 
                            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200' 
                        type="submit">Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;