import { Button, Input } from 'Components';
import * as React from 'react';
import { useNavigate } from 'react-router';
import RoutePaths from '../../RoutePath';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="flex h-full items-center justify-center">
            <div className="flex w-[500px] flex-col items-center">
                {/* logo */}
                <img className="mb-20" width={140} src="/logo.png" alt="logo" />

                {/* input */}
                <Input placeholder="Username" styles="mb-4 text-sm text-gra" />

                {/* input */}
                <Input placeholder="Password" styles="mb-12 text-sm text-gra" />
                {/* validation */}

                {/* button */}
                <Button onClick={() => navigate(RoutePaths.Home)} text="Login" />
            </div>
        </section>
    );
};
