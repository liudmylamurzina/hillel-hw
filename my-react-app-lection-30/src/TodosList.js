import React, { Component } from 'react';

export default class TodosList extends Component {
    render() {
        return (
            <>
                {this.props.list.map((task) => (
                    <div className='task-item'
                        key={task.id}
												//onClick={() => this.props.onRemove(task.id)}
                        //onClick={() => this.props.onUpdate(task.id)}
                    >
                        {task.name}
												<button className="delete-btn" 
												key={task.id} 
												onClick={()=> this.props.onRemove(task.id)}
												>✘</button>   
													
                    </div>
                ))}
            </>
        );
    }
}