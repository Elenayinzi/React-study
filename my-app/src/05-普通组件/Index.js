import React, { Component } from 'react';
import Welcome from './Welcome';
import Thank from './Thank';

class Index extends Component {
    render() {
        return (
            <div>
                <Welcome />
                <Thank />
            </div>
        );
    }
}

export default Index;