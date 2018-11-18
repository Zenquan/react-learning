import React, { Component } from 'react';
// import TodoItem from './TodoItem';

class Todolist extends Component {
  constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          list: ['learn vue', 'learn vue-router']
      }
      // 绑定this指向
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange}/>
        <button onClick={this.handleButtonClick}>添加</button>
        <ul>
          {this.state.list.map(
            (item, index)=><li key={item}>{item}
              <button onClick={this.handleButtonDelete.bind(this, index)}>删除</button>
            </li>)}
        </ul>
      </div>
    );
  }
  // 处理input里改变的事件
  handleInputChange(e) {
    // console.log(e.target.value);
    var value = e.target.value;
    this.setState(()=>({
      inputValue: value
    }))
  }
  // 处理button点击的事件
  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  // 处理button删除的事件
  handleButtonDelete(index) {
    this.setState((prevState=>{
      var list = prevState.list;
      list.splice(index, 1);
      return {
        list: list
      }
    }))
  }
}

export default Todolist;