import React from "react";
import Input from "../../../../input";
import Label from "../../../../input/__label";
import "../../../form.css";
import "../form_type_registration.css";

const FormTypeRegistrationStepTwo = props => {
    if (props.currentStep !== 1) {
        return null;
    }
    return (
        <div className="container_flex">
            <div className="form__group">
                <Label htmlFor="income">Income</Label>
                <Input
                    id="income"
                    name="income"
                    type="income"
                    placeholder="Income"
                    value={props.income}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form__group">
                <Label htmlFor="expenseTypes">Expense types</Label>
            </div>
            
            <div className="form__group">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={props.password}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    );
};

export default FormTypeRegistrationStepTwo;
