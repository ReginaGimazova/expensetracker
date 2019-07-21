import React from 'react';
import Step from './__step';
import './stepper.css';

// eslint-disable-next-line no-unused-vars
const Stepper = ({ activeStep, steps, changeActiveStep }) => (
  <div className="stepper">
    {steps.map(step => (
      <Step currentStep={step} changeActiveStep={changeActiveStep} activeStep={activeStep} />
    ))}
  </div>
);

export default Stepper;
