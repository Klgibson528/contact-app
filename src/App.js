import React, { Component } from "react";
import Contact from "./components/ContactList";
import NavBar from "./components/NavBar.js";
import "./App.css";

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
        <NavBar />
        <div className="contact container-fluid">
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
