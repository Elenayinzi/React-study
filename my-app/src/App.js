import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import PropsTest from './PropsTest.js';
import ContextTest from './ContextTest.js';

function App(props) {

  const input = React.createRef();

  const handleSubmit = (event) => {
    console.log(event.target[0].value)
    event.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
      </header>
      <form onSubmit={handleSubmit.bind(this)}>
        <label>
          输入框：
          <input type="text" ref={input}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <PropsTest />
      <ContextTest />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}
export default App;
