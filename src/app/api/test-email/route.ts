// src/app/api/test-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: process.env.RESEND_TO!,
    subject: 'Resend test from NextLevelLocal',
    html: '<p>It works 🎉</p>',
  });
  if (error) return NextResponse.json(error, { status: 500 });
  return NextResponse.json({ ok: true, id: data?.id });
}
