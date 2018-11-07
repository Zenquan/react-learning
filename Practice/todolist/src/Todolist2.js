import React, { Component } from 'react';
import store from './store';
import { getChangeInputValue, addTodoItem, deleteTodoItem, initListAction } from './store/actionCreator';
import TodolistUI from './TodolistUI';
import axios from 'axios';

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
        axios.get('/list/todolist').then(res=>{
            // console.log(res.data);
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
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