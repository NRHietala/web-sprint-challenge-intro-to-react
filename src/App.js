import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
// import Gallery from './components/Gallery';
// import Footer from './components/Footer';

const App = () => {
  const [ charData, setCharData ] = useState([])

  useEffect(()=> {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(res => {
      setCharData(res.data.results);
    })
    .catch(err => {
      console.log(err)
    }) 
  },[])

  /********************
  App
  Header
  Gallery -> Character
  Footer
  *********************/

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
