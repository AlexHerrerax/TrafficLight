import React, { useState } from 'react';
import './App.css';

function App() {
  const [light, changeLight] = useState({
    lightRed:"red figure",
    lightYellow:"yellow figure",
    lightGreen:"green figure"
  })

function changeRed(){
  changeLight({
    lightRed:"lightRed figure",
    lightYellow:"yellow figure",
    lightGreen:"green figure"
})}

function changeYellow(){
  changeLight({
    lightRed:"red figure",
    lightYellow:"lightYellow figure",
    lightGreen:"green figure"
 })}

function changeGreen(){
  changeLight({
    lightRed:"red figure",
    lightYellow:"yellow figure",
    lightGreen:"lightGreen figure"
  })}

  return (
<div className="content">
  <div className="trafficLight">
    <div className={light.lightRed} onClick={changeRed}></div>
    <div className={light.lightYellow} onClick={changeYellow}></div>
    <div className={light.lightGreen} onClick={changeGreen}></div>
  </div>
</div>
  );
}

export default App;