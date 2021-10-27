import React from "react";
import UserContext from "./UserContext";

export default (WrapedComponent) => {
    return function (props){
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrapedComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}