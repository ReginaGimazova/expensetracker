import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './stepper__step.css';

// eslint-disable-next-line no-unused-vars
const Step = ({ currentStep, activeStep, changeActiveStep }) => {
  const changeStep = () => {
    changeActiveStep(currentStep.id);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`step ${activeStep.id === currentStep.id ? 'step_active' : ''}`}
      onClick={changeStep}
    >
      {currentStep.name}
    </div>
  );
};

export default Step;
