import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';
import './css/index.css';

import App from './components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </React.StrictMode>,
);