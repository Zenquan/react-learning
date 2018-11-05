import React, { Component, Fragment } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="message"
                unmountOnExit
                onExited={(el)=>{el.style.color='red'}}
                >
                    <div>Hello</div>        
                </CSSTransition>
                <button onClick={this.handleClick}>切换</button> 
            </Fragment>
        )
    }
    handleClick() {
        this.setState(() => ({
            show: this.state.show ? false : true
        }))
    }
}

export default App;