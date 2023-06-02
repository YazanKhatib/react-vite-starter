import * as React from 'react';
import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
    const location = useLocation();
    return (
        <nav className="mb-4 flex flex-col items-center justify-between rounded-md bg-white py-6">
            <div className="mb-4 flex w-full items-center justify-center text-xl font-semibold">
                {location.pathname.slice(1)}
            </div>
        </nav>
    );
};
