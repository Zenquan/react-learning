import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './todolist.css';
import store from './store';

class Todolist2 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <Input value={this.state.inputValue}
                onChange={this.handleInputChange}
                placeholder='todo info' className='all-width'/>
                <Button type='primary'>提交</Button>
                <List
                className='all-width'
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </Fragment>
        )
    }
    handleInputChange(e) {
        const actions = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(actions);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default Todolist2;