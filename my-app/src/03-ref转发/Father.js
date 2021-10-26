import React, { Component } from 'react';
import { FancyButton } from './FancyButton.js'
const ref = React.createRef();

class Father extends Component {
    opratonBtn() {
        ref.current.style.fontSize = '100px';
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.opratonBtn()}>改变子元素字号</button>
                <FancyButton ref={ref}>Click me!</FancyButton>
            </div>
        );
    }
}

export default Father;