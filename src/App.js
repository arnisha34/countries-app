import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from './components/Countries'
import Country from './components/Country';
import Navbar from './components/Navbar'

const country = JSON.parse(localStorage.getItem('data'))

function App() {

  const [countries, setCountries] = useState(country); 

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
        setCountries(data);
        localStorage.setItem('data', JSON.stringify(countries));
    });
  },[]);

  return (
    <>
      <div className="navbar-container container-fluid">
        <Navbar />
      </div>
      <div className='countries container-fluid'>
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<Countries countries={countries}/>}/>
              <Route path="/:name" element={<Country countries={countries}/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
