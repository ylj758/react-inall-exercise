import React, {Component} from 'react'
import {Link} from "react-router-dom";
import "./Timer.less"

class Timer extends Component {
  state = {
    setSecond: 0,
    countDown: 0,
    disable:0
  }
  handleSetSecond = (e) => {
    this.setState({
      setSecond: e.target.value,
      countDown: e.target.value
    });
  }
  handleStartSecond = () => {
    this.setState({
      countDown: this.state.setSecond,
      disable: this.state.setSecond
    });
    clearInterval(this.timerID);
    this.timerID = setInterval(
      () => {
        if (this.state.countDown > 0)
          this.setState({
            countDown : this.state.countDown - 1,
            disable : this.state.disable - 1
          });
      },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>在线倒计时</h1>
        <div className="div-sec">
          <label className="time-lab">设置时间</label>
          <input type="text"
                 className="tim-input"
                 value={this.state.setSecond}
                 onChange={this.handleSetSecond}
          ></input>
          <br/>
          <input type="submit"
                 className="tim-btn"
                 value="Start"
            disabled={this.state.disable > 0}
                 onClick={this.handleStartSecond}
          ></input>
          <p className="total-sec">
            <span>{this.state.countDown} Sections</span>
          </p>
        </div>
        <Link className="back" to="/">回到主页</Link>
      </div>
    );
  }

}

export default Timer;