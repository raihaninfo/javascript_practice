import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
