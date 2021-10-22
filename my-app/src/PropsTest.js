import React from 'react';

class PropsTest extends React.Component {

    render () {
        return <ToolBar theme="dark"/>
    }
}

function ToolBar(props) {
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    )
}

class ThemeButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />
    }
}

function Button(props) {
    return (
        <div>{props.theme}</div>
    )
}

export default PropsTest