import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
function App() {
  return (
    //Bem convention Block-Element-Modifier
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
