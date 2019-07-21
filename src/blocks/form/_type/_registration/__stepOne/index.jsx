import React from 'react';
import Input from '../../../../input';
import Label from '../../../../input/__label';
import '../../../form.css';

const FormTypeRegistrationStepOne = ({
  currentStep,
  username,
  email,
  handleChangeInput,
  password,
}) => {
  if (currentStep !== 0) {
    return null;
  }
  return (
    <div className="container_flex">
      <div className="form__group">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="username">User name</Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={handleChangeInput}
        />
      </div>
      <div className="form__group">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default FormTypeRegistrationStepOne;
