import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import fakeData from "./fakeData"

function App() {
  const first10 = fakeData.slice(0, 10);
  const [products] = useState(first10);

  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        {products.map((products) => (
          <Navbar
            products={products}
            key={products.key}
          ></Navbar>
        ))}
      </header>
    </div>
  );
}

export default App;
