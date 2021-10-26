import React, { Component } from 'react';

class ProfileHeader extends Component {
    render() {
        return (
            <div>
                <h2>用户昵称：{this.props.nickname}</h2>
                <h2>用户等级：{this.props.level}</h2>
            </div>
        );
    }
}

export default ProfileHeader;