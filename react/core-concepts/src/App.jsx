import "./App.css";

function App() {
  const Persion = [
    {
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    },
    {
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info"
    },
    {
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz"
    },
    {
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io"
    },
    {
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz"
    }
  ]

  return (
    <div className="App">
     {
     Persion.map(Persion =><PersionInfo name={Persion.name} username={Persion.username} email={Persion.email} ></PersionInfo>)
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
