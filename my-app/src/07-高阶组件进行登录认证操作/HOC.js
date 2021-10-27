import React from "react";
import LoginPage from "./LoginPage";

export default (WrapedComponent) => {
    const newComponent = props => {
        const {isLogin} = props
        if(isLogin) {
            return <WrapedComponent {...props}/>
        }else {
            return <LoginPage />
        }
    }
    return newComponent
}