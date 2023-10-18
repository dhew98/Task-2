
import React from 'react';
import './App.css';
import Header from './components/Header';
import Craousel from './components/Craousel';
import Cards from './components/Cards';
import LatestPost from './components/LatestPost';
import PopularPost from './components/PopularPost';
import Profile from './components/Profile';
import RandomPost from './components/RandomPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Craousel/>
      <Cards/>
      <LatestPost/>
      <PopularPost/>
      <Profile/>
      <RandomPost/>
    </div>
  );
}

export default App;
