import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {
  let tmp = null;
  const [time, setTime] = useState(0);
  const [startflag, setstartflag] = useState(false);

  useEffect(() => {
   if(startflag===true){
    tmp = setInterval(()=>{timeAction()},1000);
    }
      return() => {
        clearInterval(tmp);
      }
  });
 
  const func=(e)=>{e.preventDefault();    setstartflag(true);}

  const timeAction=()=>{
    console.log(time);
    if(time <= 0)
    {
    setstartflag(false);
      clearInterval(tmp);
    }
    else{
    setTime(time-1);
    setstartflag(true); 
    }
  }
  const timeStop=()=>{
    setstartflag(false);
    setTime(0);
    clearInterval(tmp);

  }
  const timePause=()=>{
    setstartflag(false);
    clearInterval(tmp);

  }
  const timeChanger=(event)=>{
    setTime(parseInt(event.target.value));
    console.log(time);
  }

  return (
    <form onSubmit={func}>
      <input type = "text" value={time} onChange={timeChanger}></input>
      <br></br>
      <input type = "submit" value = "Старт"></input>
      <input type = "button" value="Стоп" onClick={timeStop}></input>
      <input type = "button" value ="Пауза" onClick={timePause}></input>
    </form>
  );
}