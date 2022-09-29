import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import VoteHere from './components/VoteHere';

function App() {
  return (
    <div className="App">
      <Header/>
      <AdDesigner/>
      <VoteHere/>
    </div>
  );
}

export default App;
