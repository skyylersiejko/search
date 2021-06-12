import logo from './logo.svg';
import './App.css';
import Bar from "./Bar/Bar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search a pokemon name
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Bar/>  
      </header>
    </div>
  );
}

export default App;
