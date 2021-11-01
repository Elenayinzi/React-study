// import React, { useState, useEffect } from 'react'

// function Index() {
//     const [count, setCount] = useState(1)
//     //相当于componentDidMount 和 componentDidUpdate
//     //初次加载执行一次，每次更新数据也会执行
//     //能返回一个函数，返回函数的功能是在页面再次更新的时候执行清除上一次更新，相当于componentWillUnmount的功能
//      useEffect( () => {
//          document.title = `You clicked ${count} times`
//      })
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 click me
//             </button>
//         </div>
//     )
// }
import React, { Component } from 'react';
import FriendListItem from './FriendListItem';
import FriendStatusString from './FriendStatusString';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: [
                {id:1,name:'xiaoming'},
                {id:2,name:'xiaoming2'},
                {id:3,name:'xiaoming3'},
                {id:4,name:'xiaoming4'},
                {id:5,name:'xiaoming5'},
                {id:6,name:'xiaoming6'}
            ]
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.friend.map((friend,index) => {
                        return (
                            <div key={index}>
                                <FriendListItem friendObj={friend}/>
                                <FriendStatusString friendObj={friend}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Index