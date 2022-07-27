import './TodoList.css';

import React, { Component } from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends Component {
    render() {
        return (
            <div className="task-list u-full-width">
                {this.props.list.map((item) => (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onToggle={this.props.onToggle}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </div>
        );
    }
}

