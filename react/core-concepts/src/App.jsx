import "./App.css";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Parson job="web Developer" dis="Kushtia" name="Rubel"></Parson>
      <Parson job="Student" dis="Pabna" name="Hasan"></Parson>
      <Parson job="Designer" dis="khulna" name="Ruhul Amin"></Parson>
    </div>
  );
}

function Parson(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  };

  return (<div style={personStyle}>
    <h2>My Name Is {props.name} </h2>
    <h3>I Im {props.job}</h3>
    <p>from : {props.dis} </p>
  </div>

    )
}

function MovieCounter(){
 const [count, setCount] = useState(1);

 const handleClick =()=>setCount(count+1);

  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h1>Number : {count} </h1>
      <NumberDisplay number={count}></NumberDisplay>
      <NumberDisplay number={count}></NumberDisplay>
      <NumberDisplay number={count}></NumberDisplay>
    </div>
  )
}

function NumberDisplay(props){
  return (
    <div>Number is : {props.number} </div>
  )
}

export default App;
