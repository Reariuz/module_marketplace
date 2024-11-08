import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

import { useTranslation } from 'react-i18next';

const App = () => {

    const { t } = useTranslation();

    console.log('app rendered')
    return (
        <div className='app'>
            <Header />
            <div className='content'>
                <MainContent />
            </div>
            <Footer />
        </div>
    );
};

export default App;
