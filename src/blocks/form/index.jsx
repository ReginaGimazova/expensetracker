import React, { Component } from "react";
import Input from "../input";
import Label from "../label";
import Button from "../button";
import "./form.css";

class Form extends Component {
  render() {
    const { formTitle, buttonText } = this.props;
    return (
      <div>
        <h1 className="form__title">{formTitle}</h1>
        <form className="form">
          <div className="form__field">
            <Label>Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="form__field">
            <Label>Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit">{buttonText}</Button>
        </form>
      </div>
    );
  }
}

export default Form;
