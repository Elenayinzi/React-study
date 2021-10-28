import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalroot = document.getElementById('modal-root')

class Modal extends Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalroot.appendChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Modal>
                    abc
                </Modal>
            </div>
        );
    }
}

export default Index;