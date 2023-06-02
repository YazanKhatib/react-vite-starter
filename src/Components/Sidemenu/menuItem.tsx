import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import RoutePaths from '../../RoutePath';

interface Props {
    to: string;
    img: string;
    text: string;
    collapsed: boolean;
    onClick: () => void;
}
const MenuItem: React.FC<Props> = ({ to, img, text, collapsed, onClick }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const isActive = React.useMemo(() => {
        const toRoute = to.toLowerCase();
        const currentPathname = location.pathname.toLowerCase();
        return toRoute === RoutePaths.Home ? toRoute === currentPathname : currentPathname.startsWith(toRoute);
    }, [location.pathname, to]);

    return !collapsed ? (
        <Link
            to={to}
            title={text}
            onClick={onClick}
            className={` ${
                isActive ? 'border-b-2 border-primary text-primary' : 'text-gra'
            } mb-8 overflow-hidden text-start font-opensans text-xl font-normal`}
        >
            <span className="px-2">{t(`${text}`)}</span>
        </Link>
    ) : (
        <Link
            to={to}
            title={text}
            onClick={onClick}
            className={` ${
                isActive ? 'border-b-2 border-primary text-primary' : 'text-gra'
            } mb-8 text-start font-opensans text-xl font-normal`}
        >
            <img src={img} alt="menu icon" />
        </Link>
    );
};

export default MenuItem;
