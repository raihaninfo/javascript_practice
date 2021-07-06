import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = {
    name: "Raihan",
    job: "Web Developer",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit cumque sapiente totam delectus soluta vitae dolorum, perferendis id rerum exercitationem? Dignissimos dolor recusandae pariatur ab esse similique veniam eum?</p>
      <div><p>ll</p></div>
        <h2>
          My Name is {myName.name} and i'm {myName.job}
        </h2>
        <a className="App-link" href="/" rel="noopener noreferrer">
          Learn React,
        </a>
        <p>i'm learning react js</p>
      </header>
    </div>
  );
}

export default App;
