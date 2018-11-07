// Todolist2.test.js
import React from 'react';
import Todolist2 from '../Todolist2';
import {shallow} from 'enzyme';


const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
    onAddClick: jest.fn()
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<Todolist2 {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AddTodoView', () => {
  const { props, wrapper } = setup();

  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('Todolist2 Component should be render', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find('input').exists());
  })
  it('When the Enter key was pressed, onAddClick() shoule be called', () => {
    // mock input 输入和 Enter事件
    const mockEvent = {// enter 事件
      target: {
        value: '123'
      }
    }
    // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    wrapper.find('input').simulate('click',mockEvent)
    // 判断 props.onAddClick 是否被调用
    expect(props.onAddClick).toBeCalled()
  })
})
