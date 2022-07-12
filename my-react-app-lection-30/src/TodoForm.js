import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onNewTaskNameChange}
                />
                <button>Save</button>
            </form>
        );
    }

    onNewTaskNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            name: this.state.name,
        };

        this.props.onSave(newTask);
    };
}