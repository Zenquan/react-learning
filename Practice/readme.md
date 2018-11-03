# Practice

## 实战总结
[react实战基础](./react.md)

## 遇到的一些坑

1. li里要带key值否则会警告，这个问题在vue中也存在, 考虑到虚拟DOM中diff，所以不要用index作为key值，而要用item。

![key-warning](./images/key.png)

2.immutable: state不允许我们做任何的改变，所以拷贝一份list，修改完再用setSate设置

```jsx
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
    });
  }
```

3.Uncaught Error: Can only set one of `children` or `props.dangerouslySetInnerHTML`

![dangerouslySetInnerHTML01](./images/dangerouslySetInnerHTML01.png)

![dangerouslySetInnerHTML02](./images/dangerouslySetInnerHTML02.png)

解决方法

- 使用dangerouslySetInnerHTML属性的虚拟dom元素之间可能有内容，应该没有任何内容

![dangerouslySetInnerHTML03](./images/dangerouslySetInnerHTML03.png)

- 改正

![dangerouslySetInnerHTML04](./images/dangerouslySetInnerHTML04.png)

## 遇到之前不会的知识点

1.bind: 绑定this使得this指向组件todolist

```jsx
this.handleChange = this.handleChange.bind(this);
this.handClick = this.handClick.bind(this);

or

在事件后面直接绑定： {this.handleChange.bind(this)}
```

bind还可以把下标index传过去

```jsx
<button onClick={ this.removeClick.bind(this, index)
removeClick(index) {
const list = [...this.state.list];
list.splice(index, 1); 
this.setState({
    list: list
});
}
```

2.input里的值通过e传递。

```jsx
handleChange(e) {
//   console.log(this);
this.setState({
    inpputValue: e.target.value
})
}
```

3.angerouslySetInnerHTML: 为了防xss攻击

4.propTypes: 用于传值校验，避免传过来的值类型错误。

```jsx
import PropTypes from 'prop-types';
// 用于传值校验，避免传过来的值类型错误。
TodoItem.propTypes = {
  content: PropTypes.string,
  delete: PropTypes.func,
  index: PropTypes.number
}
```
假如把`content: PropTypes.string`改成`content: PropTypes.number`,则会警告，因为content是字符串类型，不是数字类型。

[](./images/propTypes.png)

5.defaultProps：用于设置isRequired的默认值
```jsx
// 用于设置isRequired的默认值
TodoItem.defaultProps = {
  test: 'Hello World'
}
```
6.props, state的每次改变都会引发render函数。

- props引发子组件的render函数；
- state引发父组件的render函数；

7.虚拟DOM
第一种方案：
- 1.state数据
- 2.jsx模板
- 3.数据+模板结合，生成真实的DOM，来显示
- 4.state发生改变
- 5.数据+模板结合，生成真实的DOM，替换原始的DOM

缺陷： 
第一次生成一个完整的DOM片段
第二次生成一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能

第二种方案：
- 1.state数据
- 2.jsx模板
- 3.数据+模板结合，生成真实的DOM，来显示
- 4.state发生改变
- 5.数据+模板结合直接生成真实的DOM，并不直接替代原始的DOM
- 6.新的DOM（DocumentFragment）和 原始的DOM作对比，找差异
- 7.找到input框发生的改变
- 8.只用新的DOM中的input元素，替代掉老的DOM中的input元素

缺陷： 性能的提升并不明显

第三种方案：
- 1.state数据
- 2.jsx模板
- 3.数据+模板结合，生成虚拟DOM（虚拟DOM是一个js对象，用了描述真实DOM）损耗了性能
【'div', {id: 'abc'}, ['span', {}, 'hello world']
- 4.用虚拟DOM的结构生成真实的DOM，来显示
<div id='abc'><span>hello world</span></div>
- 5.state发生改变
- 6.生成新的虚拟DOM
【'div', {id: 'abc'}, ['span', {}, 'bye bye']】
- 7.比较原始虚拟DOM和新的虚拟DOM的叙别，找到区别的内容
- 8.直接操作DOM，改变span的内容。

优点：
- 1.性能提升了
- 2.它使得跨端应用得以实现。React Native

diff算法
- 1.setState使用异步函数是为了把多次setSate合并成一次，节约性能。
![](./images/diff.png)
- 2.diff算法实际上是同层比对虚拟DOM的算法,只要对比一层不同，就删除下面的，用新的虚拟DOM替换，这样可以节约比对时间，节约性能。
![](./images/diff.jpg)
- 3.循环列表中，li里要带key值否则会警告，这个问题在vue中也存在, 考虑到虚拟DOM中diff，所以不要用index作为key值，而要用item。

8.JSX原理

JSX->createElement->虚拟DOM（js对象）->真是的DOM

9.ref: 用来操作DOM，但不建议使用，一般在动画时要操作DOM才使用。

```jsx
<input id = "insertArea" ref={(input)=>{this.input=input}}/>
this.input.value==e.target.value;
```
注意在setState中使用时，因为setSate是异步的，直接写`console.log(this.ul.querySelectorAll('div').length);`
就会使得在setSta之前执行，所以要这样使用
```jsx
handleClick() {
    this.setState((prevState)=>({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
    }), ()=>{
      console.log(this.ul.querySelectorAll('div').length);
    })
}
```