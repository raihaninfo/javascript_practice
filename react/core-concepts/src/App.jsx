import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = {
    name: "Raihan",
    job: "Web Developer",
  };
  return (
    <div className="App">
      <Parson dis="Kushtia" name="Rubel"></Parson>
      <Parson dis="Pabna" name="Hasan"></Parson>
      <Parson dis="khulna" name="Ruhul Amin"></Parson>
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
    <h3>I Im Student</h3>
    <p>from : {props.dis} </p>
  </div>

    )
}

export default App;
