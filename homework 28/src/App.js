import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        name: '0',
				showName: 'true',        
				
    };

    render() {
			
        return (
            <div>
                <br />
                <input
								    type="text"
                    name="first"
                    defaultValue={this.state.first}
                    onChange={this.onNameInputChange1}
                />
                +
                <input
                    type="text"
										name="second"
                    defaultValue={this.state.second}
                    onChange={this.onNameInputChange2}
                />
               = {+this.state.first + +this.state.second}
								
            </div>
        );
    }

    /*onButtonClick = () => {
        this.setState({
            showName: !this.state.showName,
        });
        console.log('a', this);
    };*/

    onNameInputChange1 = (e) => {
        this.setState({
        first: e.target.value,    
						
        });
    };
		onNameInputChange2 = (e) => {
			this.setState({
				second: e.target.value,						
			});
	};
}


 
 
 
 
 