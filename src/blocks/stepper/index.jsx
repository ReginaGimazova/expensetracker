import React from 'react';
import Step from './__step';
import "./stepper.css";

const Stepper = ({activeStep, steps}) => (
    <div className="stepper">
        {steps.map((step) => (
            <Step currentStep={step} />
        ))}
    </div>
);

export default Stepper
