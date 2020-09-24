import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator"
import Timer from "./Timer"

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header className="header">
            <NavLink to="/" className="link">HOME</NavLink>
            <NavLink to="/calculator" className="link">在线计算器</NavLink>
            <NavLink to="/timer" className="link">在线倒计时</NavLink>
          </header>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
