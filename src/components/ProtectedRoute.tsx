import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoute({children}) {
    const { user, isLoading } = useAuth();

    if(isLoading)
        return <h1>Loading....</h1>

    if(!user) 
        return <Navigate to="/login" replace />

    return <>{children}</>
}