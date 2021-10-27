import React, { Component } from 'react';
import HOC from './HOC';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                昵称：{this.props.nickname} <br/>
                等级：{this.props.level} <br/>
            </div>
        );
    }
}

export default HOC(About);