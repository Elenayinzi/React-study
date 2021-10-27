import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import UserContext from './UserContext';
import HOC from './HOC';

const UserHome = HOC(Home)
const UserAbout= HOC(About)

class Index extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{nickname:'Jack',level:111}}>
                    <UserHome />
                </UserContext.Provider>
                <hr />
                <UserAbout />
            </div>
        );
    }
}

export default Index;