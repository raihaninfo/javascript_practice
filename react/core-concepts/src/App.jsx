import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = {
    name: "Raihan",
    job: "Web Developer",
  };
  return (
    <div className="App">
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

export default App;
