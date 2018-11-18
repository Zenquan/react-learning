import React, { Component } from 'react';

class TodoItem extends Component {
  
  render() {
    return (
      <ul>
        <li>{this.state.list.map(data=>data)}</li>
      </ul>
    );
  }
}

export default TodoItem;
