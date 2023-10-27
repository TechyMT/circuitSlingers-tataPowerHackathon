import React from 'react';
import DashNav from '../components/DashboardNav';
import Sidebar from '../components/Sidebar';
const Layout = ({ children }) =>
{
    return (
        <>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex flex-col w-full'>
                    <div>
                        <DashNav />
                    </div>
                    <div>
                        {children}
                    </div></div>
            </div>
        </>
    );
};

export default Layout;