import React from 'react';
import './App.css';
import AddHeader from './components/AddHeader';
import AddFooter from './components/AddFooter';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App"> 
      <AddHeader />
      <MainContent />
      <AddFooter />
    </div>
  );
};

export default App;