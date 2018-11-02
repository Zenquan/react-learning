# Practice

## 遇到的一些坑

1. li里要带key值否则会警告，这个问题在vue中也存在。

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
1.浏览器报错内容：Can only set one of `children` or `props.dangerouslySetInnerHTML‘
![](./images/dangerouslySetInnerHTML01.png)
![](./images/dangerouslySetInnerHTML02.png)

2.解决方法
![](./images/dangerouslySetInnerHTML03.png)

2.1使用dangerouslySetInnerHTML属性的虚拟dom元素之间可能有内容，应该没有任何内容

2.2改正
![](./images/dangerouslySetInnerHTML04.png)

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