import React from 'react';
import "./stepper__step.css"
;
const Step = ({currentStep, children}) => (
    <div className="step">
        {children}
    </div>
);

export default Step
