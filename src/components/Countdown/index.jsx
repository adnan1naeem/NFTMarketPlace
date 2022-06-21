import React from "react";
import "./styles.css";

class Clock extends React.Component {
  render() {
    return (
      <div className="box">
        <p
          style={{
            fontSize: "16px",
            color: "#475569",
            fontWeight: 400,
            marginTop: 6,
          }}
        >
          Aution ends in:
        </p>
        <div className="dd block">
          <h2>{this.props.dd}d</h2>
        </div>
        <div className="hh block">
          <h2>{this.props.hh}h</h2>
        </div>
        <div className="mm block">
          <h2>{this.props.mm}m</h2>
        </div>
        <div className="ss block">
          <h2>{this.props.ss}s</h2>
        </div>
      </div>
    );
  }
}

export default class CountDown extends React.Component {
  getTimeDiff(t1, t2) {
    const diff = t1.getTime() - t2.getTime();
    const dd = Math.floor(diff / 1000 / 24 / 3600);
    const hh = new Date(diff).getHours();
    const mm = new Date(diff).getMinutes();
    const ss = new Date(diff).getSeconds();
    return { dd, hh, mm, ss };
  }

  constructor(props) {
    super(props);
    const now = new Date();
    const birth = new Date(now.getFullYear() + 1, 0, 15);
    const diff = this.getTimeDiff(birth, now);
    this.state = {
      ...diff,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    const now = new Date();
    const birth = new Date(now.getFullYear() + 1, 0, 15);
    this.setState({
      ...this.getTimeDiff(birth, now),
    });
  }

  render() {
    return (
      <div className="App">
        <Clock {...this.state} />
      </div>
    );
  }
}
