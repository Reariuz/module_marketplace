import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'; 
import {ChevronFirst} from "lucide-react";



const Sidebar = () => {

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <aside className='h-screen'>
            <nav classname="h-full flex flex-col bg-white border-r shadow-sm">
                <div classname="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" className='w-32'/>
                    <button classname="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst/>
                    </button>
                </div>

            </nav>

        </aside>

        /*
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
        */
    );
};

export default Sidebar;
