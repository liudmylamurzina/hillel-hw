import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';
import './css/index.css';

import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <>
        {/* <App /> */}
        <App />
    </>,
    // </React.StrictMode>,
);