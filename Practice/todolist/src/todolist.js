import React, { Component, Fragment } from 'react';
import './style.css';

class Todolist extends Component {
  constructor(props) {
    super(props);
    // bind: 绑定this使得this指向组件todolist
    this.handleChange = this.handleChange.bind(this);
    this.handClick = this.handClick.bind(this);
    this.state = {
        inpputValue: '',
        list: ['学习react', '学习react-dom']
    }
  }
  render() {
    return (
        <Fragment>
            {/* 注释 */}
            <label htmlFor="insertArea">输入内容</label>
            <input id = "insertArea" className = "input"
            value={this.state.inpputValue} onChange={this.handleChange}/>
            <button onClick={this.handClick}>添加</button>
            <ul>
                { this.state.list.map((item, index)=>{
                    return (
                        <Fragment>
                        <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                        <button onClick={ this.removeClick.bind(this, index) }>删除</button>
                    </Fragment>
                )})
             }
            </ul>
        </Fragment>
    )
  }
  handleChange(e) {
    //   console.log(this);
    this.setState({
        inpputValue: e.target.value
    })
  }
  handClick() {
    this.setState({
        list: [...this.state.list, this.state.inpputValue],
        inpputValue: ''
    })
  }
  removeClick(index) {
    // immutable
    // state不允许我们做任何的改变，所以拷贝一份list，修改完再用setSate设置，不建议用以下写法
    // this.state.list.splice(index, 1);
    // this.setState({
    //     list: this.state.list
    // })
    const list = [...this.state.list];
    list.splice(index, 1); 
    this.setState({
        list: list
    }) 
  }
}

export default Todolist;
