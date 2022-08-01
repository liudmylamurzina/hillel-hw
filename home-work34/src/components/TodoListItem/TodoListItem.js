import './TodoListItem.css';

import { removeTodo, toggleTodo } from '../../store/actions/todoActions';

import React from 'react';
import { useDispatch } from 'react-redux';

function TodoListItem({ item }) {
    const dispatch = useDispatch();

    function onItemClick() {
        dispatch(toggleTodo(item.id));
    }

    function onDeleteItemClick(e) {
        e.stopPropagation();
        dispatch(removeTodo(item.id));
    }

    return (
        <div
            className={'task-item u-full-width' + (item.isDone ? ' done' : '')}
            onClick={onItemClick}
        >
            {item.title}
            <span className="delete-btn" onClick={onDeleteItemClick}>
                ✘
            </span>
        </div>
    );
}

export default TodoListItem;