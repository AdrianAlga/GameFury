import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.calculateTimeRemaining(),
    };
  }

  calculateTimeRemaining = () => {
    const targetTime = new Date(this.props.targetDate).getTime();
    const currentTime = new Date().getTime();
    return Math.max(targetTime - currentTime, 0);
  };

  updateCountdown = () => {
    const timeRemaining = this.calculateTimeRemaining();

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      this.setState({ timeRemaining: 0 });
    } else {
      this.setState({ timeRemaining });
    }
  };

  componentDidMount() {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timeRemaining } = this.state;
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return (
      <div>
        {timeRemaining <= 0 ? (
          <p className="ps-3">Waktu telah habis!</p>
        ) : (
          <p className="ps-3">
            {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </p>
        )}
      </div>
    );
  }
}

export default Countdown;
