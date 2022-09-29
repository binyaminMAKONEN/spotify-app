import React from 'react';
import "./App.css"
import LeftMenu from './Componets/LeftMenu';
import RightMenu from './Componets/RightMenu';
import MainMenu from './Componets/MainMenu';
function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainMenu />
      <RightMenu />
      <div className="background"></div>
    </div>
  )
  
}

export default App;
  