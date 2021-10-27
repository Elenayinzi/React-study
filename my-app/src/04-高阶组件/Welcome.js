import React, { Component } from 'react';
import HOC from './HOC'
class Welcome extends Component {
    render() {
        return (
            <div>
                welcome {this.props.username}
            </div>
        );
    }
}

export default HOC(Welcome);