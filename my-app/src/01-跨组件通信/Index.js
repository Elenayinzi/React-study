import React, { Component } from 'react';
import Profile from './Profile.js'

class Index extends Component {
    constructor() {
        super();
        this.state = {
          nickname: 'elena1',
          level: 100
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.state}/>
            </div>
        );
    }
}

export default Index;