import React from 'react';
import TinderCards from './TinderCards';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>  
  );
}

export default App;
