import { verifySin, errorMessages } from '../actions/verify-sin';
import { fakeValidSins } from './sinFakeNumbers';

describe('verifySin', () => {
  it('should return an error if the SIN does not have 9 digits', async () => {
    const formData = new FormData();
    formData.append('sin', '12345678');

    const result = await verifySin({ errors: {} }, formData);

    expect(result.errors.sin).toContain(errorMessages.incompleteDigits);
  });

  it('should return an error if the SIN contains non-numeric characters', async () => {
    const formData = new FormData();
    formData.append('sin', '12345678a');

    const result = await verifySin({ errors: {} }, formData);

    expect(result.errors.sin).toContain(errorMessages.lettersIncluded);
  });

  it('should return an error if the SIN does not pass the Luhn algorithm', async () => {
    const formData = new FormData();
    formData.append('sin', '123456789');

    const result = await verifySin({ errors: {} }, formData);

    expect(result.errors.sin).toContain(errorMessages.luhnTestIncorrect);
  });

  it('should return success if the SIN is valid', async () => {
    const formData = new FormData();
    formData.append('sin', '0 4 6 4 5 4 2 8 6'); // This is a valid SIN for Luhn check

    const result = await verifySin({ errors: {} }, formData);

    expect(result.errors).toEqual({});
    expect(result.success).toBe(true);
  });

  it('should validate all fake valid SINs correctly', async () => {
    for (const sin of fakeValidSins) {
      const formData = new FormData();
      formData.append('sin', sin);

      const result = await verifySin({ errors: {} }, formData);
      expect(result.errors).toEqual({});
      expect(result.success).toBe(true);
    }
  });
});
