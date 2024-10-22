import { NextResponse } from 'next/server';
import SinValidator from '@/common/validator';

type SinProps = {
  params: { sin: string };
};
export async function GET(req: Request, { params }: SinProps) {
  //Just Awaiting cause next 15 requires to async these params
  const { sin } = await params;
  // Check if the SIN is provided
  if (!sin || typeof sin !== 'string') {
    return NextResponse.json(
      { isValid: false, error: 'SIN is required' },
      { status: 400 }
    );
  }

  // Call SinValidator validate static method for this
  const result = SinValidator.validate(sin);

  if (!result.isValid) {
    return NextResponse.json(result, { status: 400 });
  }

  // If no errors, the SIN is valid
  return NextResponse.json(result, { status: 200 });
}
