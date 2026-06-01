import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { PRIMARY_EMAIL } from '@/lib/site';

const resendKey = process.env.RESEND_API_KEY;
const isPlaceholderKey = !resendKey || resendKey.includes('your_resend_key');
const resend = resendKey && !isPlaceholderKey ? new Resend(resendKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, pagePath, referrer } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!resend) {
      console.warn(
        `[API Lead Magnet - Demo Mode] Lead captured: ${email} (source: ${source ?? 'unknown'}, page: ${pagePath ?? 'unknown'}, referrer: ${referrer ?? 'none'}). Resend is not configured.`
      );
      return NextResponse.json({ success: true, demoMode: true });
    }

    const recipient = process.env.LEAD_MAGNET_EMAIL_TO || process.env.CONTACT_EMAIL_TO || PRIMARY_EMAIL;
    const fromAddress = process.env.LEAD_MAGNET_EMAIL_FROM || process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';
    const audienceId = process.env.LEAD_MAGNET_AUDIENCE_ID || process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      try {
        await resend.contacts.create({
          email: email.trim(),
          audienceId,
        });
      } catch (contactError) {
        console.error('Error saving lead magnet contact to Resend Audiences:', contactError);
      }
    }

    const emailHtml = `
      <h2>New lead magnet capture: AI Automation Audit</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Source:</strong> ${source ?? 'unknown'}</p>
      <p><strong>Page:</strong> ${pagePath ?? 'unknown'}</p>
      <p><strong>Referrer:</strong> ${referrer ?? 'none'}</p>
      <p><strong>Captured at:</strong> ${new Date().toISOString()}</p>
    `;

    const data = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      subject: `[Lead Magnet] AI Automation Audit - ${email}`,
      replyTo: email,
      html: emailHtml,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead magnet capture error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
