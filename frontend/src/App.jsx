import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
            <Header />
            <div className='content'>
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
};

export default App;
