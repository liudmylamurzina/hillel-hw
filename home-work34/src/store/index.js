import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';

const store = createStore(
    todosReducer,
    applyMiddleware(
        thunk,
        createLogger({
            collapsed: true,
        }),
    ),
);

export default store;