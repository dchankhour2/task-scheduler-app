import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "./Header";

const Layout = () => {
    const { user } = useAuth();

    return (
        <>
            {user && <Header />}
            <Outlet />
        </>
    )
}

export default Layout;
