import React from "react";

const FormTypeRegistrationStepThree = props => {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
      />
      <button className="btn btn-success btn-block">Sign up</button>
    </div>
  );
};

export default FormTypeRegistrationStepThree;
