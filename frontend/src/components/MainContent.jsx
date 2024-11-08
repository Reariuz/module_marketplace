import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'; 

const MainContent = () => {
    const { t } = useTranslation();

    return (
        <main className="main-content">
            <h2>{t('description')}</h2>
            <div className="game-list">
                {/* Beispielhafte Spiele */}
                <div className="game-item">Game 1</div>
                <div className="game-item">Game 2</div>
                <div className="game-item">Game 3</div>
                <div className="game-item">Game 4</div>
            </div>
        </main>
    );
};

export default MainContent;
