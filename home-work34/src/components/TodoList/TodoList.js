import './TodoList.css';

import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { selectTodosList } from '../../store/selectors/todosSelectors';
import { useSelector } from 'react-redux';

function TodoList() {
    const list = useSelector(selectTodosList);
    return (
        <div className="task-list u-full-width">
            {list.map((item) => (
                <TodoListItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default TodoList;