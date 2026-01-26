import { Footer } from '@components';
import { LandingPage, MainMenuPage, BasketPage, AdminPage, ContactsPage, AboutPage } from '@pages';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="app">
            <div style={{ flex: '1 0 auto' }}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/main" element={<MainMenuPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/basket' element={<BasketPage/>} />
                    <Route path='/admin' element={<AdminPage/>}/>
                    <Route path='/contacts' element={<ContactsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

const NotFound: React.FC = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>404 - Страница не найдена</h2>
            <p>Попробуйте перейти на <a href="/Vento/">главную страницу</a></p>
        </div>
    );
};

export default App;
