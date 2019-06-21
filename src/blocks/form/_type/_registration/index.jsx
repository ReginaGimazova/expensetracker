import React, { Component } from 'react';
import StepOne from './__stepOne';
import StepTwo from './__stepTwo';
import Stepper from '../../../stepper';
import Button from '../../../button';
import '../../../../stylesheets/main.css';
import '../../../button/button.css';
import CustomLink from '../../../link';

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      // eslint-disable-next-line react/no-unused-state
      firstStepIsComplete: false,
      // eslint-disable-next-line react/no-unused-state
      secondStepIsComplete: false,
      email: '',
      username: '',
      password: '',
      income: 0,
      expenseTypes: [],
      notifications: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  _next = () => {
    let { currentStep } = this.state;
    currentStep = currentStep >= 1 ? 1 : currentStep + 1;
    this.setState({
      currentStep,
    });
  };

  _prev = () => {
    let { currentStep } = this.state;
    currentStep = currentStep <= 0 ? 0 : currentStep - 1;
    this.setState({
      currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    const { currentStep } = this.state;
    if (currentStep !== 0) {
      return (
        <Button className="button_prev" onclick={this._prev}>
          Previous
        </Button>
      );
    }
    return null;
  }

  nextButton() {
    const { currentStep } = this.state;
    if (currentStep < 2) {
      return (
        <Button className="button_next button_yellow" onclick={this._next}>
          {/* eslint-disable-next-line no-mixed-operators */}
          {(currentStep !== 1 && 'Next') || 'Create account'}
        </Button>
      );
    }
    return null;
  }

  render() {
    const steps = ['User Profile', 'Budgets'];
    const {
      currentStep,
      email,
      username,
      password,
      income,
      notifications,
      expenseTypes,
    } = this.state;
    return (
      <div className="contentWrap contentWrap_small ">
        <div className="stepper_wrap">
          <h2 className="form__title">Registration Form</h2>
          <Stepper activeStep={currentStep} steps={steps} />
        </div>
        <form onSubmit={this.handleSubmit} className="form form_type_registration">
          <div>
            <h2 className="form__title">{steps[currentStep]}</h2>
            <CustomLink path="/auth">if you already have account Log in</CustomLink>
          </div>
          <StepOne
            currentStep={currentStep}
            handleChange={this.handleChange}
            email={email}
            username={username}
            password={password}
          />
          <StepTwo
            currentStep={currentStep}
            handleChange={this.handleChange}
            income={income}
            notifications={notifications}
            expenseTypes={expenseTypes}
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
