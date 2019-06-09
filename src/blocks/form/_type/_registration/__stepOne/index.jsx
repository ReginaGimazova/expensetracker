import React from "react";
import Input from "../../../../input";
import Label from "../../../../input/__label";
import "../../../form.css";
import "../form_type_registration.css";

const FormTypeRegistrationStepOne = props => {
  if (props.currentStep !== 0) {
    return null;
  }
  return (
    <div className="container_flex">
      <div className="form__group">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="username">User name</Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your name"
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default FormTypeRegistrationStepOne;
