import './App.css';

import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodosList from './TodosList';

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'Do something',
                
            },
            {
                id: 2,
                name: 'Do something else',
                
            },
            {
                id: 3,
                name: 'Do some exercises',
                
            },
            
        ],
    };

    render() {
        return (
            <>
                <TodosList
                    list={this.state.list}
                    onRemove={this.removeTask}
										newList={this.state.list}
										onUpdate={this.updateTask}
                />
                <TodoForm onSave={this.createTask} />
            </>
        );
    }

    removeTask = (id) => {
        this.setState({
            list: this.state.list.filter((task) => task.id !== id),
        });
    };

    createTask = (newTask) => {
        this.setState({
            list: [...this.state.list, { ...newTask, id: Date.now() }],
        });
    };

		updateTask = (updateTask) => {
			this.setState({
					list: this.state.list.map ((task)=>task.id!==updateTask.id?task:updateTask),
			});
			
	};
}