import React, { useRef } from 'react';

import { createTodo } from '../../store/actions/todoActions';
import { useDispatch } from 'react-redux';

function NewTodoForm() {
    const dispatch = useDispatch();

    function onFormSubmit(e) {
        e.preventDefault();
        const newTodo = {
            title: e.target.elements.newTodoTitle.value,
        };
        dispatch(createTodo(newTodo));
    }
    return (
        <form onSubmit={onFormSubmit}>
            <div className="row">
                <div className="ten columns">
                    <input
                        name="newTodoTitle"
                        type="text"
                        className="u-full-width"
                    />
                    <span id="errorContainer" className="error hidden"></span>
                </div>
                <div className="two columns">
                    <button type="submit" id="addBtn" className="u-full-width">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default NewTodoForm;