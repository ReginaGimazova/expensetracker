/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import StepOne from './__stepOne';
import StepTwo from './__stepTwo';
import Stepper from '../../../stepper';
import Button from '../../../button';
import '../../../../static/styles/main.css';
import '../../../button/button.css';
import CustomLink from '../../../link';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [income, setIncome] = useState(0.0);
  const [okToSpend, setOkToSpend] = useState(0.0);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [notifications, setNotifications] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const next = () => {
    const step = currentStep >= 1 ? 1 : currentStep + 1;
    setCurrentStep(step);
  };

  const prev = () => {
    const step = currentStep <= 0 ? 0 : currentStep - 1;
    setCurrentStep(step);
  };

  const changeActiveStep = indexOfStep => {
    setCurrentStep(indexOfStep);
  };

  const previousButton = () => {
    if (currentStep !== 0) {
      return (
        <Button className="button_prev" onclick={prev}>
          Previous
        </Button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 2) {
      return (
        <Button className="button_next button_yellow" onclick={next}>
          {/* eslint-disable-next-line no-mixed-operators */}
          {(currentStep !== 1 && 'Next') || 'Create account'}
        </Button>
      );
    }
    return null;
  };

  const steps = [{ id: 0, name: 'User Profile' }, { id: 1, name: 'Budgets' }];

  return (
    <div className="mainContentWrap mainContentWrap_small ">
      <div className="stepperWrap">
        <h2 className="form__title">Registration Form</h2>
        <Stepper
          activeStep={steps[currentStep]}
          steps={steps}
          changeActiveStep={changeActiveStep}
        />
      </div>
      <form onSubmit={handleSubmit} className="form form_type_registration">
        <div>
          <h2 className="form__title">{steps[currentStep].name}</h2>
          <CustomLink path="/auth">if you already have account click here to Log in</CustomLink>
        </div>
        <StepOne
          currentStep={currentStep}
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
        />
        <StepTwo
          currentStep={currentStep}
          income={income}
          okToSpend={okToSpend}
          notifications={notifications}
          expenseTypes={expenseTypes}
          setIncome={setIncome}
          setOkToSpend={setOkToSpend}
          setNotifications={setNotifications}
          setExpenseTypes={setExpenseTypes}
        />
        <div className="container_flex">
          {previousButton()}
          {nextButton()}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
