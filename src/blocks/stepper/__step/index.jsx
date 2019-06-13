import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import "./stepper__step.css";

const Step = ({currentStep, activeStep}) => (
    <div className="step">
        {currentStep}
    </div>
);

export default Step
