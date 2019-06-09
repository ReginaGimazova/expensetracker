import React, { Component } from "react";
import StepOne from "./__stepOne";
import StepTwo from "./__stepTwo";
import StepThree from "./__stepThree";
import Stepper from "../../../stepper";
import Button from "../../../button";
import "../../../../stylesheets/main.css";
import "./form_type_registration.css";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      email: "",
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log (name, value)
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n
           Email: ${email} \n
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 0 ? 0 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 0) {
      return (
        <Button
          onclick={this._prev}
        >
          Previous
        </Button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <Button
          onclick={this._next}
        >
          Next
        </Button>
      );
    }
    return null;
  }

  render() {
    const steps = ["User Profile", "Budgets", ""];
    return (
      <div className="contentWrap contentWrap_small ">
        <Stepper currentStep={this.state.currentStep} steps={steps} />
        <form onSubmit={this.handleSubmit} className="form_type_registration">
          <h2 className="form__title">{steps[this.state.currentStep]}</h2>
          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            username={this.state.username}
            password={this.state.password}

          />
          <StepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <StepThree
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    );
  }
}

export default MasterForm;
