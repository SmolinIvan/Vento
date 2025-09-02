import { LandingPage, MainMenuPage } from '@/pages';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/main" element={<MainMenuPage />} />
            </Routes>
        </div>
    );
};

export default App;
