'use client';
import React, { useState, ChangeEvent } from 'react';
import { Card, Input, Button } from '@nextui-org/react';
// import { useFormState, useFormState } from 'react-dom';
import * as actions from '@/actions';

const SinRegisterForm = () => {
  const [sin, setSin] = useState('');
  const [useForm, action] = React.useActionState(actions.verifySin, {
    errors: {},
  });

  //keep state after validation
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSin(event.target.value);
  };

  //clean the digits from this
  const handleInputCleanUp = () => setSin('');

  return (
    <Card className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Validate Your SIN
      </h3>
      <form action={action} className="flex flex-col gap-4">
        <Input
          type=""
          placeholder="Enter your SIN"
          required
          value={sin}
          onChange={handleInputChange}
          onClear={handleInputCleanUp}
          color="primary"
          isClearable
          fullWidth
          isInvalid={!!useForm?.errors.sin}
          errorMessage={useForm?.errors.sin?.join('')}
          name="sin"
        />
        <div className="text-green-500 mt-2">
          {useForm?.success && <h1>This is a valid SIN</h1>}
        </div>
        <Button className="mt-4" type="submit" color="primary">
          Validate
        </Button>
      </form>
    </Card>
  );
};

export default SinRegisterForm;
