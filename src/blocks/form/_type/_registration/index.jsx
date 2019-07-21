/* eslint-disable react/no-unused-state */

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
      firstStepIsComplete: false,
      secondStepIsComplete: false,
      email: '',
      username: '',
      password: '',
      income: 0,
      expenseTypes: [],
      notifications: false,
    };
  }

  handleChangeInput = event => {
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

  changeActiveStep = indexOfStep => {
    this.setState({
      currentStep: indexOfStep,
    });
  };

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
    const steps = [{ id: 0, name: 'User Profile' }, { id: 1, name: 'Budgets' }];
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
          <Stepper
            activeStep={steps[currentStep]}
            steps={steps}
            changeActiveStep={this.changeActiveStep}
          />
        </div>
        <form onSubmit={this.handleSubmit} className="form form_type_registration">
          <div>
            <h2 className="form__title">{steps[currentStep].name}</h2>
            <CustomLink path="/auth">if you already have account click here to Log in</CustomLink>
          </div>
          <StepOne
            currentStep={currentStep}
            handleChangeInput={this.handleChangeInput}
            email={email}
            username={username}
            password={password}
          />
          <StepTwo
            currentStep={currentStep}
            handleChangeInput={this.handleChangeInput}
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
