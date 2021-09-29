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
4.组件名称必须以大写字母开头，小写字母开头的会呗当作原生DOM标签
5.纯函数，不改变入参的值
#### state用法
#### redux语法
#### 生命周期
#### 常用组件
#### HOOK的使用