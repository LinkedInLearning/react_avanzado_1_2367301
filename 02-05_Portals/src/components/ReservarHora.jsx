import React, { Component } from "react";

export default class ReservarHora extends Component {
  constructor(props) {
    super(props);

    this.state = { time: `${this.getRandomInt(12)}` };
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * max).toString();
  };

  render() {
    return (
      <div className="list-group-item list-group-item-action">
        <div className=" d-flex justify-content-between">
          <div className="float-left">
            <h2>{this.state.time}:00</h2>
          </div>
          <div className="float-right">
            <button onClick={this.props.onClick}  className="btn btn-success">
              Reservar Hora
            </button>
          </div>
        </div>
      </div>
    );
  }
}
