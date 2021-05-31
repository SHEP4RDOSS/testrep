import logo from './logo.svg';
import './App.css';



                            //ex1
function Ex1(props){
  return (
  <div>
  <h1> My Info</h1>
  <p>{props.fio}</p>
  <p>{props.number}</p>
  <p>{props.email}</p>
  <p>{props.city}</p>
  <p>{props.path}</p>
  </div>
  );
}
                              //ex2
function Ex2(props){
  return (
    <div>
    <h1> My Pet Info</h1>
    <p>{props.type}</p>
    <p>{props.breed}</p>
    <p>{props.age}</p>
    </div>
    );
}


export default function App() {
  
  var FIO = "Pruglo Aleksandr Aleksandrovich";
  let number = "0730924230";
  let email="sasha0007001@gmai.com";
  let city = "KR";
  let path = "/index.jfif";

  let type = "dog";
  let breed = "Haski"
  let age = "1 year"

  return (

    <div>
    <Ex1 fio = {FIO} number = {number} email = {email}  path={path} city = {city}/>
    <Ex2 type = {type} breed = {breed} age={age} />
    </div>
  );
}
