import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';



function NavMenu() {
  return (
  <>
  <Link to="/" className="links"> Info  </Link>
  <Link to="/tmat" className="links">  The Most popular Attraction</Link>
  <Link to="/Attractions" className="links"> Some Attractions </Link>
  <Link to="/Photos" className="links"> Some Photos </Link>
  </>
  );
 }
function Biography() {
  return (
    <div>
      <h1>Криво́й Рог</h1>
      <p>
      Криво́й Рог (укр. Кривий Ріг) — город областного значения в Днепропетровской области Украины. Административный центр Криворожского района. До конца 2020 года составлял Криворожский городской совет.Город основан в 1775 году и расположен на месте слияния рек Ингулец и Саксагань. Седьмой по численности населения город Украины, центр Криворожской агломерации. Один из самых длинных городов Европы — линейное расстояние от крайней северной точки до южной 66,1 км по прямой. На официальном сайте исполкома Криворожского городского совета указанная длина города — 126 км.Кривой Рог — важный экономический и научный центр Украины, крупный транспортный узел, центр разработки Криворожского железорудного бассейна.
      </p>
    </div>
  );
}
function Tmpp() {
  return (<div><img src="/tm.jfif" alt = "none"/></div>);
}

function AllAt() {
  return (
    <div>
      <img src="/tm.jfif" alt = "none"/>
      <img src="/1.jfif" alt = "none"/>
      <img src="/2.jfif" alt = "none"/>
      <img src="/3.jfif" alt = "none"/>
      <img src="/4.jfif" alt = "none"/>
    </div>
  );
} 

function AllPictures() {
  return (
    <div>
      <img src="/5.jfif" alt = "none"/>
      <img src="/6.jfif" alt = "none"/>
      <img src="/7.jfif" alt = "none"/>
      <img src="/8.jfif" alt = "none"/>
    </div>
  );
}
function NotFound() {
  return <h2>Not found</h2>;
}
export default function App() {
  return (
    <div>
      <Router>
        <NavMenu/>
        <Switch>
          <Route exact path="/" component={Biography} />
          <Route path="/tmat" component={Tmpp} />
          <Route path="/Attractions" component={AllAt} />
          <Route path="/Photos" component={AllPictures} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

