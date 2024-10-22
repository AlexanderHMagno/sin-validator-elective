'use client';
import React from 'react';
import { Card, Input, Button } from '@nextui-org/react';
// import { useFormState, useFormState } from 'react-dom';
import * as actions from '@/actions';

const SinRegisterForm = () => {
  const [useForm, action] = React.useActionState(actions.verifySin, {
    errors: {},
  });
  return (
    <Card className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Validate Your SIN
      </h3>
      <form action={action} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Enter your SIN"
          fullWidth
          isInvalid={!!useForm?.errors.sin}
          errorMessage={useForm?.errors.sin?.join('')}
        />
        <Button className="mt-4" type="submit" color="primary">
          Validate
        </Button>
      </form>
    </Card>
  );
};

export default SinRegisterForm;
