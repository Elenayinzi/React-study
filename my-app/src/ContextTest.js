import React from 'react';

const ThemeContext = React.createContext('light')
class ContextTest extends React.Component {

    render () {
        return (
            <ThemeContext.Provider value="red">
                <ToolBar />
            </ThemeContext.Provider>
        )
    }
}

function ToolBar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

class ThemeButton extends React.Component {
    static contextType = ThemeContext
    render() {
        return <Button theme={this.context} />
    }
}

function Button(props) {
    return (
        <div>{props.theme}</div>
    )
}

export default ContextTest