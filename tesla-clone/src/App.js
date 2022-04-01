import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Section/>
    </div>
  );
}

export default App;
