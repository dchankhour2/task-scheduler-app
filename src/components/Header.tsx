import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
    const {logout, user} = useAuth()
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">
                    My App
                </div>
                <nav className="md:flex space-x-6 text-gray-700">
                    <NavLink
                        to="/dashboard"
                        className="hover:text-blue-600 transition">
                        Dashboard
                    </NavLink>
                    {user && (
                        <NavLink 
                            onClick={logout}
                            to="/"
                            className="hover:text-blue-600 transition">
                            Log out
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;