import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            username:''
        }
    }
    componentWillMount() {
        let username = localStorage.getItem('username')
        this.setState({
            username: username
        })
    }
    render() {
        return (
            <div>
                welcome {this.state.username}
            </div>
        );
    }
}

export default Welcome;