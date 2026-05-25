import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { PRIMARY_EMAIL } from '@/lib/site';

const resendKey = process.env.RESEND_API_KEY;
const isPlaceholderKey = !resendKey || resendKey.includes('your_resend_key');
const resend = resendKey && !isPlaceholderKey ? new Resend(resendKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tag, tool, email, company, teamSize, calculatorInputs, calculatorResult } = body;

    if (!email || !tag || !tool) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      console.warn(`[API Tool Lead - Demo Mode] Lead captured for ${email} (Tool: ${tool}, Tag: ${tag}). Bypassing Resend because no valid API key is configured in .env.local.`);
      return NextResponse.json({ success: true, demoMode: true });
    }

    const recipient = process.env.CONTACT_EMAIL_TO || PRIMARY_EMAIL;
    const fromAddress = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';

    // Add to Resend Audiences database if configured
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (resend && audienceId) {
      try {
        await resend.contacts.create({
          email: email.trim(),
          audienceId: audienceId,
        });
      } catch (contactError) {
        console.error('Error saving lead to Resend Audiences:', contactError);
        // Continue execution so the admin notification email is still sent
      }
    }

    const emailHtml = `
      <h2>New tool lead: ${tool}</h2>
      <p><strong>Tag:</strong> ${tag}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Team Size:</strong> ${teamSize || 'N/A'}</p>
      <h3>Calculator Inputs</h3>
      <pre>${JSON.stringify(calculatorInputs, null, 2)}</pre>
      <h3>Calculator Result</h3>
      <pre>${JSON.stringify(calculatorResult, null, 2)}</pre>
    `;

    const data = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      subject: `[Tool Lead] ${tool} - ${email}`,
      replyTo: email,
      html: emailHtml
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tool lead capture error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
