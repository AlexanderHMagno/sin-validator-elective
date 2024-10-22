'use server';

import { z } from 'zod';

interface verifySinProps {
  errors: {
    sin?: string[];
    _form?: string[];
  };
}

const sinSchema = z.object({
  sin: z
    .string()
    .regex(
      /^\d{9}$/,
      'Well Well it looks like your SIN doesnt have 9 digits, try again'
    ),
});

export async function verifySin(
  useState: verifySinProps,
  formData: FormData
): Promise<verifySinProps> {
  const validation = sinSchema.safeParse({ sin: formData.get('sin') });

  //first validation check if the user has a valid length
  if (validation.error) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  //second validation check if this has 9 digits
  const isNonNumber = isNaN(Number(validation.data.sin));
  if (isNonNumber) {
    return {
      errors: {
        sin: [
          'well well, have you seen a SIN with letters?, Please add a Valid Sin',
        ],
      },
    };
  }

  //Third Validation calculate algorithm

  return {
    errors: {
      sin: ['you are really bad at it'],
    },
  };
}
