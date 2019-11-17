import React from 'react';
import Select from 'react-select';

import Input from '../../../../input';
import Label from '../../../../input/__label';
import '../../../form.css';
import '../../../../../static/styles/main.css';

import expenseTypes from '../../../../../data/expenseTypes';

const FormTypeRegistrationStepTwo = ({
  currentStep,
  income,
  okToSpend,
  setIncome,
  setOkToSpend,
}) => {
  if (currentStep !== 1) {
    return null;
  }

  const handleIncome = event => {
    setIncome(event.target.value);
  };

  const handleOkToSpend = event => {
    setOkToSpend(event.target.value);
  };

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
          onChange={handleIncome}
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
            onChange={handleOkToSpend}
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
