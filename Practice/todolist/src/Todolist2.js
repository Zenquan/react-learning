import React, { Component } from 'react';
import store from './store';
import { getChangeInputValue, addTodoItem, deleteTodoItem, getTodoItem } from './store/actionCreator';
import TodolistUI from './TodolistUI';

class Todolist2 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
        this.deleteclick = this.deleteclick.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return <TodolistUI 
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleClickChange = {this.handleClickChange}
            list = {this.state.list}
            deleteclick = {this.deleteclick}
        />
    }
    
    componentDidMount() {
        const action = getTodoItem();
        store.dispatch(action);
    }
    
    handleInputChange(e) {
        const action = getChangeInputValue(e.target.value);
        store.dispatch(action);
    }
    handleClickChange() {
        const action = addTodoItem();
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    deleteclick(index) {
        const action = deleteTodoItem(index);
        store.dispatch(action);
    }
}

export default Todolist2;