import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  const [ charData, setCharData ] = useState([]);

  const StyledApp = styled.div`
    .container {
      display:flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
    }
  `

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
    <StyledApp className="container">
      <Header />
      <Gallery characters={charData}/>
      <Footer />
    </StyledApp>
  );
}

export default App;
