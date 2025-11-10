import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import { BasketProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        {/* Для деплоя basename='/Vento'
        надо разобратсья как поменять*/}
        <BrowserRouter basename='/'>
            <MenuProvider>
                <BasketProvider>
                    <App />
                </BasketProvider>
            </MenuProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
