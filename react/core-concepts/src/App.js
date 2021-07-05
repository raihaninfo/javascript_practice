import logo from './logo.svg';
import './App.css';

function App() {
  const myName = {
    name : "Raihan",
    job: "Web Developer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>My Name is {myName.name} and i'm {myName.job}</h2>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
