import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <h2>Featured Games</h2>
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
