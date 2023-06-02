import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const Nav: React.FC = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <nav className="mb-4 flex h-16 items-center justify-between rounded-md bg-white px-4">
            <div className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center font-opensans text-lg text-primary">
                    {t(`${location.pathname.slice(1)}`)}
                </ol>
            </div>

            <div className="App-header">
                <button
                    className=" mr-2 cursor-pointer rounded-md p-2 text-primary shadow-md"
                    onClick={() => changeLanguage(t('lang') === 'en' ? 'dk' : 'en')}
                >
                    {t('lang') === 'en' ? 'dk' : 'en'}
                </button>
            </div>
        </nav>
    );
};
