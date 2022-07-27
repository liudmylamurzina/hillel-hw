import React, { useCallback, useMemo, useRef, useState } from 'react';

const INITIAL_VALUE = { title: '' };

function NewTodoForm({ onSave, list }) {
    const [formState, setFormState] = useState(INITIAL_VALUE);

    const ref = useRef('hello world');

    function onFieldChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    console.log('render');

    function onFormSubmit(e) {
        e.preventDefault();

        onSave(formState);

        setFormState(INITIAL_VALUE);
    }

    // function getTitlesLength() {
    //     console.log('calculating length');
    //     return list.reduce((acc, item) => acc + item.title.length, 0);
    // }

    // const totalLength = useMemo(getTitlesLength, [list]);

    return (
        <form onSubmit={onFormSubmit}>
            <div className="row">
                <div className="ten columns">
                    {/* {totalLength} - {formState.title.length} */}
                    <input
                        name="title"
                        type="text"
                        className="u-full-width"
                        value={formState.title}
                        onChange={onFieldChange}
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

