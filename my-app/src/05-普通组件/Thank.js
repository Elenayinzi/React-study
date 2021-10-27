import React, { Component } from 'react';

class Thank extends Component {
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
                thank {this.state.username}
            </div>
        );
    }
}

export default Thank;