import './TodoListItem.css';

import React, { Component } from 'react';

export default class TodoListItem extends Component {
    render() {
        return (
            <div
                className={
                    'task-item u-full-width' +
                    (this.props.item.isDone ? ' done' : '')
                }
                onClick={this.onItemClick}
            >
                {this.props.item.title}
                <span className="delete-btn" onClick={this.onDeleteItemClick}>
                    ✘
                </span>
            </div>
        );
    }

    onItemClick = () => {
        this.props.onToggle(this.props.item.id);
    };

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onRemove(this.props.item.id);
    };
}

