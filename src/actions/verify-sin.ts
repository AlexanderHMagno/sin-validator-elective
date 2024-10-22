'use server';

import { z } from 'zod';

interface verifySinProps {
  success?: boolean;
  errors: {
    sin?: string[];
    _form?: string[];
  };
}

const sinSchema = z.object({
  sin: z
    .string()
    .transform((input) => input.replace(/\s+/g, '')) // Remove spaces
    .refine((sanitized) => /^\d{9}$/.test(sanitized), {
      message:
        'Well Well, it looks like your SIN doesnt have 9 digits, try again',
    }),
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

  //Third Validation: calculate algorithm
  const isLuhnAlgorithm = luhnAlgorithm(validation.data.sin);

  if (!isLuhnAlgorithm) {
    return {
      errors: {
        sin: ['Mr Hans Peter Luhn, says this is not a valid SIN'],
      },
    };
  }

  //Well if we reach this point we are ready to shine

  return {
    errors: {},
    success: true,
  };
}

const luhnAlgorithm = (sin: string): boolean => {
  //go thru the sin as an string is an array use modulus for either number and add it

  let sum = 0;

  for (let index = 0; index < sin.length; index++) {
    const digit = Number(sin[index]);
    if (index % 2) {
      const double = digit * 2;
      if (double > 10) sum += 1 + (double % 10);
      else sum += double;
    } else {
      sum += digit;
    }
  }

  //If there is not remainder then is valid
  return sum % 10 === 0;
};
