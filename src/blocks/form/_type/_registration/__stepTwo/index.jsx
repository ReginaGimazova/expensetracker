import React from 'react';
import Input from '../../../../input';
import Label from '../../../../input/__label';
import '../../../form.css';

const FormTypeRegistrationStepTwo = ({ currentStep, income, handleChange }) => {
  if (currentStep !== 1) {
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
          value={income}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="expenseTypes">Expense types</Label>
      </div>
    </div>
  );
};

export default FormTypeRegistrationStepTwo;
