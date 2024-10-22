'use server';

import SinValidator from '../common/validator';
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
    .refine((sanitized) => !SinValidator.alphaNumericValues(sanitized), {
      message: SinValidator.errorMessages.lettersIncluded,
    })
    .refine((sanitized) => SinValidator.lengthAlgorithm(sanitized), {
      message: SinValidator.errorMessages.incompleteDigits,
    }),
});

export async function verifySin(
  useState: verifySinProps,
  formData: FormData
): Promise<verifySinProps> {
  const validation = sinSchema.safeParse({ sin: formData.get('sin') });

  //first validation check if the user has a valid length, and valid data
  if (validation.error) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  //Third Validation: calculate Luhn algorithm
  if (!SinValidator.luhnAlgorithm(validation.data.sin)) {
    return {
      errors: {
        sin: [SinValidator.errorMessages.luhnTestIncorrect],
      },
    };
  }

  //Well if we reach this point we are ready to shine, and its a valid SIN
  return {
    errors: {},
    success: true,
  };
}
