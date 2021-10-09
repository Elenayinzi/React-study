前言
===========
***********
# React文档官网地址
## 中文网址：https://react.docschina.org
## 英文网址：https://reactjs.org
--------------
本文是React 入门学习，通过本篇文章你可以学习到以下内容
---------
#### React项目构建方法，引入包(本地包或CDN链接)和使用脚手架构建方式
##### 如果你通过 CDN 的方式引入 React，我们建议你设置 crossorigin
##### 使用npx create-react-app 创建React 项目
#### JSX语法
#### 元素渲染，React元素是不可变的对象，更新UI的唯一方式是创建一个新的UI,然后render，但是我们只需要更改数据，这就是状态组件的出现
#### 组件&props，组件类似于js的函数
1.props是入参，只读性，不能修改自身的props
2.函数组件，function Test(props){retrun <h1></h1>},类似构造函数
3.class组件, class Welcome extends React.Component { 
	render() {
		return <h1></h1>
	}
}
4.组件名称必须以大写字母开头，小写字母开头的会被当作原生DOM标签，分为有状态组件和无状态组件
5.纯函数，不改变入参的值，只使用参数，所有React组件都要像纯函数一样保护props的值不被更改
6.组合组件：嵌入式组件
#### state用法
1.state是私有的，受控于当前组件
2.不要直接修改state:this.state.comment="",此代码不会更新UI,使用setState,只有构造函数使用this.state={}
3.state的更新可能是异步的，setState()接受一个函数而不是对象来解决这个问题，看文档写法
4.state的更新会被合并
5.数据是像下流动的，作为参数传递给自组件
6.组件的更新依赖于state或者props的值的更改
#### 事件处理
1.采用小驼峰式命名事件
2.使用JSX语法时需要传入一个函数作为事件处理函数，而不是一个字符串
#### redux语法
#### 生命周期: 构造函数，render, mount, unmount
1.mount:挂载，组件第一次渲染到DOM中时，componentDidMount
2.unmount：卸载，从DOM中删除组件时，componentWillUnmount
#### 常用组件
#### HOOK的使用
