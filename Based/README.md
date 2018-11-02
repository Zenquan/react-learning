# Based

## 安装

### 创建一个新的React APP

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 在现有项目添加react

```bash
yarn init
yarn add react react-dom
```

or

```bash
yarn init
yarn add react react-dom
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

### CDN支持

development

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

or

production

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

## 主要概念

### JSX

>一种JavaScript语法扩展

```jsx
const element = <h1>Hello, world!</h1>;
```

## 高级指引

## API参考

## 一些坑