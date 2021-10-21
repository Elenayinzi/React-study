import './App.css';
import PropTypes from 'prop-types'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
        
      </header>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}
export default App;
