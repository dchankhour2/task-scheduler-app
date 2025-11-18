import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, error, user } = useAuth();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await login(username, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 p-6">
            <div className="w-full max-w-md p-8 space-y-6 bg-white/5 backdrop-blur rounded-2xl border border-white/6 shadow-lg">
                <div className="flex items-center gap-3">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="0" y="0" width="24" height="24" rx="5" fill="#6366f1" />
                        <path d="M6.5 12.5l3 3 7-7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-2xl font-extrabold text-white">Sign in to your account</h2>
                </div>

                {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            className="block w-full px-3 py-2 rounded-md bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full px-3 py-2 rounded-md bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-2">
                        <button
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-sm text-slate-300 mt-2">Don't have an account? <Link to="/signup" className="text-cyan-200 underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;