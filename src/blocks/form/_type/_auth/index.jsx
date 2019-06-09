import React, { Component } from "react";
import Input from "../../../input";
import Label from "../../../input/__label";
import Button from "../../../button";
import "./authForm.css";
import "../../form.css";

class Form extends Component {
  render() {
    return (
      <form className="form_type_auth">
        <h1 className="form__title">Log in</h1>
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
          <Button>log in</Button>
        </form>
    );
  }
}

export default Form;
