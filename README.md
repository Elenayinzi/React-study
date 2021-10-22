前言
===========
***********
# React文档官网地址
## 中文网址：https://react.docschina.org
## 英文网址：https://reactjs.org
--------------
本文是React 入门学习，通过本篇文章你可以学习到以下内容
---------
## 核心概念
#### React项目构建方法，引入包(本地包或CDN链接)和使用脚手架构建方式
##### 如果你通过 CDN 的方式引入 React，我们建议你设置 crossorigin
##### 使用npx create-react-app 创建React 项目
1.sudo npm install -g create-react-app 安装脚手架
2.create-react-app -V 查看脚手架的版本
3.npx create-react-app my-app /create-react-app  my-app 创建项目
4.npm start 启动项目
5.react-scripts 的每个命令 start build test eject
6.strictMode:严格模式
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
4.为了在回调中使用 `this`，这个绑定是必不可少的：this.handleClick = this.handleClick.bind(this);
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
#### 状态提升
1.将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state，避免跨组建共享数据，通过props传递参和方法
#### 组合和继承
1.包含关系：props.children
2.特例关系
3.组件可以接受任意格式的props
4.React中没有使用到继承，通过组合来实现代码的复用，也没有slot的概念
#### React哲学
1.将设计好的UI划分为组件层级
2.按照单一功能原则来划分组件
3.组件结构和数据模型一一对应
4.先创建一个静态版本，UI代码比较多，先构建好，再实现交互部分，交互部分是逻辑多细节多
5.单向数据流，单向绑定的思想使得组件模块化，易于开发
6.确定UI state的最小(且完整)表示
7.确定state放置的位置
8.添加反向数据流，从下往上传递数据
9.数据从上往下流动
## 高级指引
#### 使用PropsTypes进行类型检查
1.React v15.5后，用prop-types库代替了
2.通过类型检查捕获大量错误
3.Flow或TS是js的扩展，也可以对整个应用程序做类型检查
4.出于性能考虑，只会在开发模式中检查
5.限制单个元素：PropTypes.element 来确保传递给组件的 children 中只包含一个元素。
6.默认prop值：defaultProps 属性来定义 props 的默认值
7.函数中使用时，需要先声明函数组件，再导出组件
#### Fragments
1.解决一个组件返回多个元素的问题，eg:多个td
  写法一：显式语法：<React.Fragment></React.Fragment>可以有key值，是唯一的属性
  写法二：简短语法，像空标签 <></>
#### Refs and the DOM，class组件
1.props是父子组件交互的唯一方式；
2.需要修改组件实例或DOM元素时需要用到Refs
3.使用场景：
  （1）管理焦点，文本选择或媒体播放
  （2）触发强制动画
  （3）集成第三方DOM库
4.勿过度使用refs
5.创建Refs： this.myRef = React.createRef() <div ref={this.myRef} />
6.访问Refs: const node = this.myRef.current
7.ref的值根据节点的类型而有所不同：
  （1）ref属性为HTML元素，底层DOM就是current属性
  （2）ref属性为自定义class组件时，ref对象接收组件的挂载实例为其current属性
  （3）不能在引用函数组件上使用ref属性（可以使用forwardRef或者转化成class组件），但是可以在函数组件内部使用ref属性
8.将DOM Refs暴露给父组件，使用ref转发：Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref
9.回调Refs：ref属性等于一个回调函数，ref直接接收element元素
#### 非受控组件
1.
#### context
#### 深入jsx
#### 跨组件通信

#### ref转发
#### 高阶组件
#### render_props
#### portals
#### antD
#### axios

#### redux
#### reducer
#### store
#### toodlist实现
#### hook

#### 生命周期: 构造函数，render, mount, unmount
1.mount: 挂载，组件第一次渲染到DOM中时，componentDidMount
2.unmount: 卸载，从DOM中删除组件时，componentWillUnmount
3.