import React, { Component } from 'react';

class MouseTracker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove(e) {
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render() {
        return (
            <div style={{height:'100vh',background:'pink'}} onMouseMove={
                e=>this.handleMouseMove(e)
            }>
                <h1>移动鼠标，显示鼠标坐标位置</h1>
                <p>当前鼠标的位置坐标是：({this.state.x},{this.state.y})</p>
            </div>
        )
    }
}


class Index extends Component {
    render() {
        return (
            <div>
                <MouseTracker />
            </div>
        );
    }
}

export default Index;