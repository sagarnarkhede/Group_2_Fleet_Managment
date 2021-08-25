import React, { Component } from 'react';

class My extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
        const { name, age } = (this.props.location && this.props.location.state) || {};

    }
    
    render() {
        
        console.log(this.name);
        return (
            <div>
                <h1>{this.name}</h1>
                <h1>bye</h1>
            </div>
        );
    }
}

export default My;