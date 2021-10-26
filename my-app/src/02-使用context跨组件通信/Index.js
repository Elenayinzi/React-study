import React, { Component } from 'react';
import Profile from './Profile.js'
import { myContext } from './context.js'

class Index extends Component {
    constructor() {
        super();
        this.state = {
            nickname: 'elena3',
            level: 100
          }
    }
    changeName(name) {
        this.setState({
            nickname: name
        })
    }
    render() {
        return (
            <div>
                <myContext.Provider value={this.state}>
                    <Profile onClick={(name)=>this.changeName(name)}/>
                </myContext.Provider>
                <Profile />
            </div>
        );
    }
}

export default Index;