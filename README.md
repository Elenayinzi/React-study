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
3.React不能通过 return false阻止默认行为，只能使用preventDefault()
4.// 为了在回调中使用 `this`，这个绑定是必不可少的：this.handleClick = this.handleClick.bind(this);
可以使用:
public class fields: test = () => {} or 1.绑定了this;2.书写少了，不用在构造函数中bind；3.自动绑定，不用多次创建函数；
箭头函数：()=>this.test();会出现重复创建函数的问题
5.向事件处理程序传递参数
#### 条件渲染
1.元素变量
2.与运算符&&：{arr.length >0 && <h1>aa</h1>}在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回false表达式，跳过expression
3.三目运算符：{isLoggedIn ? 'currently' : 'not'}
4.阻止组件渲染，返回null
#### 列表&key
1.map()渲染多个组件
2.基础列表组件
3.列表兄弟元素每个元素添加一个key作为唯一标识，但全局不需要唯一
4.用key提取组件，元素的 key 只有放在就近的数组上下文中才有意义。
5.在jsx中嵌入map()
#### 表单
1.受控组件:input,textarea,select
2.非受控组件：文件input标签
3.处理多个input输入时增加name属性来区分
this.setState({
  [name]: value
});
4.受控组件输入空值的情况
5.什么是Formik：是由React组件和hooks组成，它内置了表单的state管理操作，无需我们在单独为表单建立state，同时使用了Context，能够让表单组件多层嵌套，不再需要我们一层层传递
#### 状态提升 p9 58分钟
1.
#### 组合和继承 p10 25分钟
1.
#### react哲学 p11-p15 60分钟
1.
#### 小游戏开发 p16-p24 120分钟
1.
#### p25-p30 60分钟
1.
#### p30-p35 60分钟
1.
#### p36-p40 60分钟
1.
以上10/12号完成
### p41-p60 350分钟
以上10/13号完成
### p61-p80 350分钟
以上10/14号完成


#### redux语法
#### 生命周期: 构造函数，render, mount, unmount
1.mount: 挂载，组件第一次渲染到DOM中时，componentDidMount
2.unmount: 卸载，从DOM中删除组件时，componentWillUnmount
3.
#### 常用组件
#### HOOK的使用