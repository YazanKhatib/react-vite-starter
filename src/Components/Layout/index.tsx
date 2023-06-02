import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Nav, Sidemenu } from 'Components';

export const Layout: React.FC = () => {
    return (
        <div className="flex h-full w-full">
            <Sidemenu />

            <div className="w-full p-3">
                <Nav />
                <Outlet />
            </div>
        </div>
    );
};
