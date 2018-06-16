import React, { Component } from "react";

function OnChangeFun(props) {
  return this.setState({ [e.target.name]: e.target.value });
}

export default OnChangeFun;
