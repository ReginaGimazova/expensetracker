import React from 'react';
import Select from 'react-select';

import Input from '../../../../input';
import Label from '../../../../input/__label';
import '../../../form.css';

import expenseTypes from '../../../../../data/expenseTypes';

const FormTypeRegistrationStepTwo = ({ currentStep, income, handleChangeInput }) => {
  if (currentStep !== 1) {
    return null;
  }
  console.log(expenseTypes);
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
          onChange={handleChangeInput}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="expenseTypes">Expense types</Label>
        <Select
          isMulti
          name="colors"
          options={expenseTypes}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default FormTypeRegistrationStepTwo;
