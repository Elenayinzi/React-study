import React, { Component } from "react";

const HOC = (WrapedComponent) => {
    return class extends Component{
       componentWillMount() {
           this.beginTime = Date.now();
       } 
       componentDidMount() {
           this.endTime = Date.now();
           const times = this.endTime - this.beginTime
           console.log(WrapedComponent.name + '组件渲染花费时间是：' + times + '毫秒')
       }
       render() {
           return <WrapedComponent {...this.props}/>
       }
    }
}

export default HOC