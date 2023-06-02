import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import RoutePaths from '../../RoutePath';
import MenuItem from './menuItem';

export const Sidemenu: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div
            className={` ${
                collapsed ? 'w-[110px] px-2' : 'w-1/5 max-w-sm px-8'
            } flex h-full flex-col justify-between bg-white py-2 font-opensans transition-all duration-700 ease-in-out`}
        >
            <div className={` ${collapsed && 'items-center'} flex flex-col`}>
                <div className="my-6 flex justify-center">
                    <img src="/logo.png" width={collapsed ? '40px' : '80px'} alt="logo" />
                </div>

                <h1
                    className={` ${
                        collapsed ? 'text-xs' : 'text-base'
                    } mb-8 border-b pb-2 text-center text-base font-semibold transition-all duration-700 ease-in-out`}
                >
                    RelateIT portal
                </h1>

                <MenuItem
                    collapsed={collapsed}
                    to={RoutePaths.Home}
                    img="/svgs/Afhentninger.svg"
                    text="home"
                    onClick={() => navigate(RoutePaths.Home)}
                />
                <MenuItem
                    collapsed={collapsed}
                    to={RoutePaths.About}
                    text="about"
                    img="/svgs/Leveringer.svg"
                    onClick={() => navigate(RoutePaths.About)}
                />
            </div>

            <div>
                <div className={` ${collapsed && 'hidden'} mb-4 mr-1 flex cursor-pointer justify-end`}>
                    <img onClick={() => setCollapsed(!collapsed)} width={12} src="/svgs/LeftArrow.svg" />
                </div>

                <div className={` ${!collapsed && 'hidden'} mb-4 flex cursor-pointer justify-center`}>
                    <img onClick={() => setCollapsed(!collapsed)} width={12} src="/svgs/RightArrow.svg" />
                </div>

                <div className={` ${collapsed && 'flex-col'} flex items-center justify-between border-t-2 py-4`}>
                    <p className={` ${collapsed && 'mb-2'} text-md font-medium`}>RelateIT</p>

                    <div className={` ${collapsed && 'justify-center'} flex cursor-pointer overflow-hidden`}>
                        {!collapsed && <p className="mr-3 text-lg text-gra">{t('logout')}</p>}

                        <img
                            onClick={() => navigate(RoutePaths.Login)}
                            width="26"
                            src="/svgs/logout.svg"
                            alt="Logout icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
