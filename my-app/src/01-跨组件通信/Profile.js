import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader.js'
class Profile extends Component {
    render() {
        return (
            <div>
                <ProfileHeader {...this.props} />
                <ul>
                    <li>设置项1</li>
                    <li>设置项2</li>
                    <li>设置项3</li>
                    <li>设置项4</li>
                </ul>
            </div>
        );
    }
}

export default Profile;