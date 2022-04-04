import './App.css';
import React,{useEffect,useState} from 'react';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,Link,Switch, Route} from "react-router-dom";
//import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

//import axios from "axios";

const App = () => {
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Mumbai");

  useEffect(() => {
    const fetchapi=async() =>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7fdd664c78964ad5a078923e413b981e`;
      const response= await fetch(url);
      const res= await response.json();
      console.log(res);
      setCity(res.main);
    };
  fetchapi();
})

  return (

    <div class="app-wrap">    
    <header>
      <input type="search" className="search-box" placeholder="Search for a city..." onChange={(even)=>{
        setSearch(even.target.value)
      }} />
    </header>

    {!city ? (
      <div>
      <h1> No Data Found</h1>
      <h1> Please Type Correct City Name</h1>
      </div>
    ):(
      <main>
      <section className="location">
        <div className="city">{search}</div>
        <div className="date">{new Date().toLocaleDateString()}</div>
      </section>
      <div className="current">
        <div className="temp">{city.temp}<span>°c</span></div>
        <div className="hi-low">Min: {city.temp_min}°c / Max: {city.temp_max}°c</div>
      </div>
    </main>

    ) 
    }
    
  </div>


  );
}

export default App;
