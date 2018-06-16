import React, { Component } from "react";

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

// function ContactList(props) {
//     return (

//         <ol>{props.contacts}</ol>

//     );
//   }

export default Contact;
