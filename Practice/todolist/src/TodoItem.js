import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  render(){
    console.log('childrender');
    const { content, test } = this.props;
    return (
      <div>
        <li>
          { test } - { content }
          <button onClick={this.delete}>删除</button>
        </li>
      </div>
    )
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.content!==this.props.content){
      return true;
    }else {
      return false;
    }
  }
  
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }
  
  delete() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // console.log(this.props.index);
  }
}
// 用于传值校验，避免传过来的值类型错误。
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delete: PropTypes.func,
  index: PropTypes.number
}
// 用于isRequired的默认值
TodoItem.defaultProps = {
  test: 'Hello World'
}

export default TodoItem;