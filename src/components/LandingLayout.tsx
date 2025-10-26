import { Outlet } from "react-router-dom";
import LandingHeader from '../components/LandingHeader';

const LandingLayout = () => {
    

    return (
        <>
           <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
                <LandingHeader />
                <Outlet />
            </div>
        </>
    )
}

export default LandingLayout;
