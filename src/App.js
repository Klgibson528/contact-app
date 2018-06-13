import React, { Component } from "react";

import "./App.css";

function Contact(props) {
  return (
    <li className="single-contact">
      <div>
        <h4>{props.contactInfo.name}</h4>
        <h6>Email: {props.contactInfo.email}</h6>
        <h6>Phone Number: {props.contactInfo.phone}</h6>
        <h6>Address: {props.contactInfo.address}</h6>
        <h6>City: {props.contactInfo.city}</h6>
        <h6>State: {props.contactInfo.state}</h6>
        <h6>Zip Code: {props.contactInfo.zip}</h6>
      </div>
    </li>
  );
}

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
    const info = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    const contacts = [...this.state.contacts, info];

    console.log(contacts);
    this.setState({
      contacts: contacts,
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
    var contacts = [];
    if (this.state.contacts.length) {
      contacts = this.state.contacts.map((contact, index) => {
        return <Contact key={"contact_" + index} contactInfo={contact} />;
      });
    }
    console.log(contacts);

    return (
      <div className="App">
        <header className="App-header navbar-dark bg-primary">
          <h1>Contact List</h1>
        </header>
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              Name:
              <input
                className="input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              E-mail:
              <input
                className="input"
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              Phone Number:
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              Address:
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              State:
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="inputs">
              Zip Code:
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
              <input className="btn btn-primary" type="submit" />
            </div>
          </form>
        </div>
        <div className="contact-list">
          <ol>{contacts}</ol>
        </div>
      </div>
    );
  }
}

export default App;
