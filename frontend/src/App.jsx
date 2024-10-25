import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TitleBar from './components/TitleBar';
import './App.css'; // Optional für Styling

const App = () => {
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
