import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './stepper__step.css';

// eslint-disable-next-line no-unused-vars
const Step = ({ currentStep, activeStep }) => <div className="step">{currentStep}</div>;

export default Step;
