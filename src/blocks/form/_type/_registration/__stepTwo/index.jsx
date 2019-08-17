import React from 'react';
import Select from 'react-select';

import Input from '../../../../input';
import Label from '../../../../input/__label';
import '../../../form.css';
import '../../../../../static/main.css';

import expenseTypes from '../../../../../data/expenseTypes';

const FormTypeRegistrationStepTwo = ({ currentStep, income, handleChangeInput, okToSpend }) => {
  if (currentStep !== 1) {
    return null;
  }
  console.log(expenseTypes);
  return (
    <div>
      <div className="form__group form__group_type_number">
        <Label htmlFor="income">Income</Label>
        <Input
          id="income"
          name="income"
          type="number"
          placeholder="Income"
          min="0.00"
          step="0.01"
          value={income}
          onChange={handleChangeInput}
        />
      </div>
      <div className="form__group form__group_type_number">
        <Label htmlFor="ok_to_spend">Ok to spend</Label>
        <div className="form__group_horizontal">
          <Input type="text" placeholder="Name for your purpose" />
          <Input
            id="ok_to_spend"
            name="ok_to_spend"
            type="number"
            placeholder="Ok to spend"
            min="0.00"
            step="0.01"
            value={okToSpend}
            onChange={handleChangeInput}
          />
        </div>
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
