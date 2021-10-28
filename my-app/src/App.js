import PropTypes from 'prop-types';
import './App.css';
import React, { Component } from 'react';
import Index from './11-axios/Index.js'
// import PropsTest from './PropsTest.js';
// import ContextTest from './ContextTest.js';

localStorage.setItem('username','elena11')
// function welcome(username){
//   console.log('welcome' + username)
// }
// function thank(username){
//   console.log('thank you' + username)
// }
// function wrapFunUsername(wrapedFun) {
//     let newFun = ()=>{
//       let username = localStorage.getItem('username')
//       wrapedFun(username)
//     }
//     return newFun
// }

// welcome = wrapFunUsername(welcome)
// thank = wrapFunUsername(thank)

// welcome();
// thank();

class App extends Component {
  render() {
    return (
      <div>
        <Index />
      </div>
    );
  }
}

export default App;

// class App extends C(props) {

//   // const input = React.createRef();

//   // const handleSubmit = (event) => {
//   //   event.preventDefault()
//   // }

//   return (
//     <div>
//       {/* <header className="App-header">
//         <h1>{props.name}</h1>
//       </header>
//       <form onSubmit={handleSubmit.bind(this)}>
//         <label>
//           输入框：
//           <input type="text" ref={input}/>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <PropsTest />
//       <ContextTest /> */}
//       App
//     </div>
//   );
// }
// App.propTypes = {
//   name: PropTypes.string
// }

