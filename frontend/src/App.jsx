import React from 'react';
import {FaBeer,FaHome,FaWrench,FaComments, FaQuestionCircle, FaCog, FaStore} from 'react-icons/fa'
import Header from './components/Header';
import Sidebar, { SidebarItem } from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TitleBar from './components/TitleBar';
import './App.css';

import { useTranslation } from 'react-i18next';

const App = () => {

    const { t } = useTranslation();

    console.log('app rendered')
    return (
        <div className='app'>
            <TitleBar />
            <div className='content'>
                <Sidebar>
                    <SidebarItem icon={<FaHome size={20} />} text="Home" active />
                    <SidebarItem icon={<FaStore size={20} />} text="Marketplace"  />
                    <SidebarItem icon={<FaWrench size={20} />} text="Configuration"  />
                    <SidebarItem icon={<FaComments size={20} />} text="Forum" alert />
                    <hr classname="my-3" />
                    <SidebarItem icon={<FaCog size={20} />} text="Settings"  />
                    <SidebarItem icon={<FaQuestionCircle size={20} />} text="Help"  />
                </Sidebar>
                <MainContent />
            </div>
            <Footer />
        </div>
    );
};

export default App;
