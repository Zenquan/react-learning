import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './todolist.css'

const TodolistUI = (props)=>{
    return (
            <Fragment>
                <Input value={props.inputValue}
                onChange={props.handleInputChange}
                placeholder='todo info' className='all-width'/>
                <Button type='primary'
                onClick={props.handleClickChange}
                >提交</Button>
                <List
                className='all-width'
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={props.list}
                renderItem={(item)=> (<List.Item onClick={index=>props.deleteclick(index)}>{item}</List.Item>)}
                />
            </Fragment>
        )
}
// class TodolistUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <Input value={this.props.inputValue}
//                 onChange={this.props.handleInputChange}
//                 placeholder='todo info' className='all-width'/>
//                 <Button type='primary'
//                 onClick={this.props.handleClickChange}
//                 >提交</Button>
//                 <List
//                 className='all-width'
//                 // header={<div>Header</div>}
//                 // footer={<div>Footer</div>}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item)=> (<List.Item onClick={index=>this.props.deleteclick(index)}>{item}</List.Item>)}
//                 />
//             </Fragment>
//         )
//     }
// }

export default TodolistUI;