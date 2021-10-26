import React, { Component } from 'react';
import { myContext } from './context.js';

class ProfileHeader extends Component {
    static contextType = myContext;
    render() {
        return (
            <div>
                {
                    this.props.onClick && <button
                        onClick={()=>this.props.onClick('elena5')}
                    >
                        改变昵称
                    </button>
                }
                <h2>用户昵称：{this.context.nickname}</h2>
                <h2>用户等级：{this.context.level}</h2>
            </div>
        );
    }
}
//ProfileHeader.contextType = myContext
export default ProfileHeader;