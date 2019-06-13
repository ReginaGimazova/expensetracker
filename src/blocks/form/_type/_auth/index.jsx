import React, { Component } from "react";
import Input from "../../../input";
import Label from "../../../input/__label";
import Button from "../../../button";
import "./authForm.css";
import "../../form.css";
import "../../../button/button.css";
import CustomLink from "../../../link";

class Form extends Component {
  render() {
    return (
      <form className="form_type_auth">
        <div>
          <h1 className="form__title">Log in</h1>
          <CustomLink path="/registration">or create account</CustomLink>
        </div>
        <div>
          <div className="form__group">
            <Label>Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="form__group">
            <Label>Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>

        <Button className="button_submit">log in</Button>
      </form>
    );
  }
}

export default Form;
