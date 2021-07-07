import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setUser(data))
  },[])

  return (
    <div className="App">
     {
     user.map(user =><PersionInfo name={user.name} username={user.username} email={user.email} ></PersionInfo>)
     }
    </div>
  );
}

function PersionInfo(props){
  return(
    <div style={{border:"1px solid red", margin:'10px'}}>
      <h2>Name: {props.name} </h2>
      <h3>User Name : {props.username}</h3>
      <h3>Email : {props.email} </h3>
    </div>
  )
}


export default App;
