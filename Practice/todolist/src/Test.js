import React, { Component } from 'react';

class Test extends Component {
    render() {
        console.log('Test render');
        return (          
            <div>{this.props.testContent}</div>
        )
    }
}

export default Test;