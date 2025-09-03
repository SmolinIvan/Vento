import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

const isGitHubPages = window.location.hostname === 'smolinivan.github.io';
const baseName = isGitHubPages ? '/Vento' : '/';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={baseName}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
