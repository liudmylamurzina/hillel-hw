import React, { useEffect } from 'react';
import { fetchList, setTodoList } from '../../store/actions/todoActions';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import { getTodoList } from '../../api';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchList());
    }, []);

    return (
        <div className="container">
            <TodoList />
            <NewTodoForm />
        </div>
    );
}

export default App;