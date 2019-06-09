import React from 'react';
import Step from './__step';
import "./stepper.css";

const Stepper = ({currentStep, steps}) => (
    <div className="stepper">
        {steps.map((step) => (
            <Step currentStep={currentStep}>{step}</Step>
        ))}
    </div>
);

export default Stepper
