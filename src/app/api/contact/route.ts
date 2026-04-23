import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP:
// 1. Create a free account at https://resend.com
// 2. Get your API key from the Resend dashboard
// 3. Add to your .env.local:
//      RESEND_API_KEY=re_xxxxxxxxxxxx
// 4. On Vercel: add RESEND_API_KEY in Project Settings → Environment Variables
//
// NOTE: Resend's free tier allows sending FROM verified domains or
// onboarding@resend.dev. To send from cityzine@city-zine.eu, verify
// city-zine.eu in your Resend dashboard under Domains.
// Until verified, set RESEND_FROM_EMAIL=onboarding@resend.dev in .env.local
// ─────────────────────────────────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'cityzine@city-zine.eu';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[CITYZINE Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1C1914;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #9C9489; margin-bottom: 24px;">
            New message via city-zine.eu contact form
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #9C9489; width: 80px;">FROM</td>
              <td style="padding: 8px 0; font-size: 14px;">${name} &lt;${email}&gt;</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #9C9489;">SUBJECT</td>
              <td style="padding: 8px 0; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <div style="border-top: 1px solid #DDD7CD; padding-top: 24px;">
            <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #9C9489; margin-top: 32px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
