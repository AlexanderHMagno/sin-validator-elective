'use server';

interface verifySinProps {
  errors: {
    sin?: string[];
    _form?: string[];
  };
}

export async function verifySin(
  useState: verifySinProps,
  formData: FormData
): Promise<verifySinProps> {
  const sin = formData.get('sin');

  console.log(sin);
  return {
    errors: {
      sin: ['you are really bad at it'],
    },
  };
}
