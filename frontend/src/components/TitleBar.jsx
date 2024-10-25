// src/components/TitleBar.js
import React from 'react';

const TitleBar = () => {
    const minimize = () => {
        console.log('Minimize toggled');
        window.electron.minimize();
    };

    const maximize = () => {
        console.log('Maximize toggled');
        window.electron.maximize();
    };

    const close = () => {
        console.log('Close toggled');
        window.electron.close();
    };



    return (
        <div className="titlebar">
            <div className="controls">
                <button onClick={minimize}>🗕</button>
                <button onClick={maximize} >🗖</button>
                <button onClick={close} >✖</button>

            </div>
        </div>
    );
};



export default TitleBar;
