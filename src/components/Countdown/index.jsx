import { Box } from "@mui/material";
import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            fontWeight: 400,
            marginTop: 6,
          }}
        >
          Aution ends in:
        </p>
        <Box
          sx={{
            fontSize: "18px",
            margin: "5px",
            width: "40px",
            fontWeight: 600,
          }}
        >
          <Box>{this.props.dd}d</Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            margin: "5px",
            width: "30px",
            fontWeight: 600,
          }}
        >
          <Box>{this.props.hh}h</Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            margin: "5px",
            width: "30px",
            fontWeight: 600,
          }}
        >
          <Box>{this.props.mm}m</Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            margin: "5px",
            width: "30px",
            fontWeight: 600,
          }}
        >
          <Box>{this.props.ss}s</Box>
        </Box>
      </Box>
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
      <div className="parent">
        <Clock {...this.state} />
      </div>
    );
  }
}
