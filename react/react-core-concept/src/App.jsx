import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
