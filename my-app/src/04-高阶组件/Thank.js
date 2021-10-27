import React, { Component } from 'react';
import HOC from './HOC'
class Thank extends Component {
    render() {
        return (
            <div>
                thank {this.props.username}
            </div>
        );
    }
}
Thank = HOC(Thank)
export default Thank;