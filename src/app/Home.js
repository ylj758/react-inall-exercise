import React from 'react';
import './home.less';
import calculator from '../images/calculator.png'
import timer from '../images/timer.png'
import hero from '../images/hero-image.png'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={hero} className="hero"/>
      <p className="hero-p">在线实用工具</p>
      <div className="cal-tim">
        <img src={calculator} className="calculator"></img>
        <img src={timer} className="timer"></img>
        <br/>
        <Link className="cal-lab" to="/calculator">计算器</Link>
        <Link className="tim-lab" to="/timer">倒计时</Link>
      </div>
    </div>
  );
};

export default Home;