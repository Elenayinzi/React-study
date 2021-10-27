import React, { Component } from 'react';
import HOC from './HOC';
import CartPage from './CartPage';

const AuthCartPage = HOC(CartPage)
class Index extends Component {
    render() {
        return (
            <div>
                <AuthCartPage isLogin={false}/>
            </div>
        );
    }
}

export default Index;