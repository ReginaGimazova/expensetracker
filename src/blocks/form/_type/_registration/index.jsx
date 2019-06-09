import React, { Component } from "react";
import StepOne from "./__stepOne";
import StepTwo from "./__stepTwo";
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
      password: "",
      income: 0,
      expenseTypes: [],
      notifications: false
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
    currentStep = currentStep >= 1 ? 1 : currentStep + 1;
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
          type="prev"
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
          type="next"
        >
          Next
        </Button>
      );
    }
    return null;
  }
2
  render() {
    const steps = ["User Profile", "Budgets", ""];
    return (
      <div className="contentWrap contentWrap_small ">
        <div className="stepper_wrap">
          <h2 className="form__title">Registration Form</h2>
          <Stepper currentStep={this.state.currentStep} steps={steps} />
        </div>
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
            income={this.state.income}
            notifications={this.state.notifications}
            expenseTypes={this.state.expenseTypes}
          />
         <div className="container_flex">
           {this.previousButton()}
           {this.nextButton()}
         </div>
        </form>
      </div>
    );
  }
}

export default MasterForm;
