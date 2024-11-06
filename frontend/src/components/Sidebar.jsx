import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'; 


const Sidebar = () => {

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <aside className="sidebar">
            <h2>{t('welcome')}</h2>
            <ul>
                <li>Action</li>
                <li>Adventure</li>
                <li>RPG</li>
                <li>Shooter</li>
                <li>Indie</li>
                <li><button onClick={() => changeLanguage('de')}>Deutsch</button></li>
                <li><button onClick={() => changeLanguage('en')}>English</button></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
