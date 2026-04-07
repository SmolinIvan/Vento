import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import { BasketProvider } from './context/BasketContext';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        {/* Для деплоя basename='/Vento'
        надо разобратсья как поменять*/}
        <BrowserRouter basename='/'>
            <UserProvider>
                <MenuProvider>
                    <BasketProvider>
                        <App />
                    </BasketProvider>
                </MenuProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
