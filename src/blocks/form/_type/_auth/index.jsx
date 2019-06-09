import React, { Component } from "react";
import Input from "../../../input";
import Label from "../../../input/__label";
import Button from "../../../button";
import "./authForm.css";

class Form extends Component {
  render() {
    return (
      <div>
        <h1 className="authForm__title">Log in</h1>
        <form className="authForm">
          <div className="authForm__field">
            <Label>Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="authForm__field">
            <Label>Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit">log in</Button>
        </form>
      </div>
    );
  }
}

export default Form;
