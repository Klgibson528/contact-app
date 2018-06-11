import React, { Component } from "react";

import "./App.css";

const Contact = ({ text }) => <li>{text}</li>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const info = [
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zip
    ];
    const contacts = [...this.state.contacts, info];
    this.setState({
      contacts,
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    });
  }
  render() {
    const { newContact } = this.state;
    const contacts = this.state.contacts.map((t, i) => (
      <Contact key={i} text={t} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact List</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <div>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            E-mail:{" "}
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            Phone Number:{" "}
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            Address:{" "}
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            City:{" "}
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            State:{" "}
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            Zip Code:{" "}
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <div>
          <ol>{contacts}</ol>
        </div>
      </div>
    );
  }
}

export default App;
