import React, { Component } from 'react';
import HOC from './HOC';
import CartPage from './CartPage';
import LoginPage from './LoginPage';

const AuthCartPage = HOC(CartPage)
const AuthLoginPage = HOC(LoginPage)

class Index extends Component {
    render() {
        return (
            <div>
                <AuthCartPage />
                <AuthLoginPage />
            </div>
        );
    }
}

export default Index;