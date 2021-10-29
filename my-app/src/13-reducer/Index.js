import React, { Component } from 'react';

import { createStore } from 'redux'
import todoApp from '../store/reducers';
import { addTodo } from '../store/actions'

let store = createStore(todoApp)

console.log(store.getState())

let un = store.subscribe(function() {
    console.log(store.getState())
})
un();

store.dispatch(addTodo('Study HTML'))
store.dispatch(addTodo('Study CSS'))

class Index extends Component {
    render() {
        return (
            <div>
                Index
            </div>
        );
    }
}

export default Index;