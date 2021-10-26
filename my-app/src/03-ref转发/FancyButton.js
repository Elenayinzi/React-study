import React, { Component } from 'react';

export const FancyButton = React.forwardRef((props,ref)=>{
    return (
        <button ref={ref}>
            {props.children}
        </button>
    )
})