import React from 'react';
import "./App.css"
import LeftMenu from './Componets/LeftMenu';
import RightMenu from './Componets/RightMenu';
import MainContainer from './Componets/MainContainer';
function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer/>
      <RightMenu />
      <div className="background"></div>
    </div>
  )
  
}

export default App;
  