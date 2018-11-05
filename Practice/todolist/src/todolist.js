import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
// import Test from './Test';
// import axios from 'axios';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './todolist.css';


class Todolist extends Component {
  constructor(props) {
    super(props);
    // bind: 绑定this使得this指向组件todolist
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.state = {
        inputValue: '',
        list: []
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  render() {
    console.log('render');
    return (
        <Fragment>
            {/* 注释 */}
            <label htmlFor="insertArea">输入内容</label>
            <Input placeholder='todo info' 
              className='all-width input'
              value={this.state.inputValue} 
              onChange={this.handleChange}/>
            <Button type="primary" 
              onClick={this.handleClick}>添加</Button> 
            {/* <input id = "insertArea" 
              className = "input"
              value={this.state.inputValue} 
              onChange={this.handleChange}
              // ref={(input)=>{this.input=input}}
            /> */}
            {/* <button onClick={this.handleClick}>添加</button> */}
            <ul ref={ul=>this.ul=ul}>
                { this.getTodoItem() }
            </ul>
            {/* <Test testContent={this.state.inputValue}/> */}
        </Fragment>
    )
  }
  componentDidMount() {
    // console.log('componentDidMount');
    // axios.get('/api/todolist')
    //   .then((res)=>{
    //     this.setState(()=>({
    //       // 建议使用
    //       list: [...res.data]
    //     }))
    //   })
    //   .catch(()=>alert('error'))
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  getTodoItem() {
    return this.state.list.map((item, index)=>{
      return (
        <TodoItem 
          key={index}
          content={item} 
          index={index} 
          deleteItem={this.deleteClick}
        />
        // <Fragment>
        //   <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
        //   <button onClick={ this.deleteClick.bind(this, index) }>删除</button>
        // </Fragment>
        )
      }
    )
  }
  handleChange(e) {
    //   console.log(this);
    // 新版本的react建议把setState里传入函数
    // const value = this.input.value;
    const value = e.target.value;
    this.setState(()=>({
      inputValue: value
    }))
    // this.setState({
    //     inputValue: e.target.value
    // })
  }
  handleClick() {
    this.setState((prevState)=>({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
    }), ()=>{
      console.log(this.ul.querySelectorAll('div').length);
    })
  }
  deleteClick(index) {
    // immutable
    // state不允许我们做任何的改变，所以拷贝一份list，修改完再用setSate设置，不建议用以下写法
    // this.state.list.splice(index, 1);
    // this.setState({
    //     list: this.state.list
    // })
  
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index, 1); 
      return {
        list: list
      }
    }) 
  }
}

export default Todolist;