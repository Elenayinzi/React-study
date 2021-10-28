import React, { Component } from 'react';
import tmpg from './test.jpg'

class Pic extends Component {
    render() {
        return (
            <img src={tmpg} 
                style={{
                    position:'absolute',
                    width: '200px',
                    height:'200px',
                    left:this.props.mouse.x+'px',top:this.props.mouse.y+'px'}}
            />
        )
    }
}

class MouseWithPic extends Component{
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
                <p>当前鼠标的位置坐标是：({this.state.x},{this.state.y})</p>
                <Pic mouse={this.state}/>
            </div>
        )
    }
}

class Index2 extends Component {
    render() {
        return (
            <div>
                <MouseWithPic />
            </div>
        );
    }
}

export default Index2;