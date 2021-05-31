import logo from './logo.svg';
import './App.css';



                            //ex1
function Ex1(){
  return (<h1>Hello react</h1>);
}
                              //ex2
function Ex2(props){
  return (
  <div>
  <h1> My Info</h1>
  <p>{props.fio}</p>
  <p>{props.number}</p>
  <p>{props.email}</p>
  </div>
  );
}
                              //ex3
function Ex3(props){
  return (
    <div>
    <h1> Country Info</h1>
    <p>{props.city}</p>
    <p>{props.country}</p>
    <p>{props.year}</p>
    <img src = {props.path} alt = "none"></img>
    </div>
    );
}


export default function App() {
  
  var FIO = "Pruglo Aleksandr Aleksandrovich";
  let number = "0730924230";
  let email="sasha0007001@gmai.com";
  let city = "KR";
  let country= " Ukraine";
  let year = 1991;
  let path = "/Без названия.jfif";

  return (

    <div>
    <Ex1/>
    <Ex2 fio = {FIO} number = {number} email = {email}/>
    <Ex3 city = {city} country = {country} year={year} path={path}/>
    </div>
  );
}
