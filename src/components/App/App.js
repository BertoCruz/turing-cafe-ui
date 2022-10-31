import React, { Component } from "react";
import "./App.css";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form"
import { fetchCall } from "../../api-calls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    fetchCall("reservations", "GET").then((data) => {
      console.log("This is our Reservations data: ", data);
      this.setState({ reservations: data });
    });
  }

  addReservation = (newRes) => {
    this.setState({reservations : [...this.state.reservations, newRes]})
  }

  render() {
    console.log("over here++++", this.state.reservations);
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
          <Form addReservation={this.addReservation}/>
        <div className="resy-form"></div>
        <div className="resy-container">
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
