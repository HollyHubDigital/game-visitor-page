import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { ok: false, error: 'Account sign in is not available yet.' },
    { status: 503 }
  );
}
