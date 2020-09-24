import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './Calculator.less';

class Calculator extends Component {
  state = {
    display: "",
    num1: "",
    num2: "",
    operation: "",
    result: 0
  }
  handleInput = (event) => {
    const value = event.target.value;
    console.log(Number(value));
    if(isNaN(Number(value))){
      this.setState({
        operation: value,
        display: this.state.display + value
      })
    }else{
      if (this.state.operation === "") {
        this.setState({
          num1: this.state.num1 + value,
          display: this.state.display + value
        })
      } else {
        this.setState({
          num2: this.state.num2 + value,
          display: this.state.display + value
        })
      }
    }
  };
  handleClear = (event) => {
    this.setState({
      display: "",
      num1: "",
      num2: "",
      operation: "",
      result: 0
    });
  }
  handleResult = (event) => {
    let result = 0;
    switch (this.state.operation) {
      case "+":
        result = Number(this.state.num1) + Number(this.state.num2)
        break;
      case "-":
        result = Number(this.state.num1) - Number(this.state.num2)
        break;
      case "*":
        result = Number(this.state.num1) * Number(this.state.num2)
        break;
    }
    this.setState({display: result});
  }

  render() {
    const number = ['+', '-', '*', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
      <div className="cal">
        <h1>在线计算器</h1>
        <input className="display" type="text" value={this.state.display}/>
        <div className="cal-body">
          {
            Object.values(number).map((item, index) => {
              return <button className="btn" value={item} onClick={this.handleInput} key={index}>{item}</button>;
            })
          }
          <button className="btn" onClick={this.handleClear}>Clear</button>
          <button className="btn" onClick={this.handleResult}>=</button>
        </div>
        <Link className="back" to="/">回到主页</Link>
      </div>
    );
  }

}

export default Calculator;