import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();

    if (isLoading) return <h1>Loading....</h1>;

    if (!user) return <Navigate to="/login" replace />;

    return <>{children}</>;
}