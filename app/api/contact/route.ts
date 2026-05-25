import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY;
const isPlaceholderKey = !resendKey || resendKey.includes('your_resend_key');
const resend = resendKey && !isPlaceholderKey ? new Resend(resendKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, subject, message } = body;

    // Validate required fields
    if (!firstname || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      console.warn(`[API Contact - Demo Mode] Message captured from ${firstname} <${email}>. Subject: ${subject || 'New Lead'}. Message: ${message}. Bypassing Resend because no valid API key is configured in .env.local.`);
      return NextResponse.json({ success: true, demoMode: true });
    }

    // Add to Resend Audiences database if configured
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (resend && audienceId) {
      try {
        await resend.contacts.create({
          email: email.trim(),
          firstName: firstname,
          lastName: lastname || undefined,
          audienceId: audienceId,
        });
      } catch (contactError) {
        console.error('Error saving contact to Resend Audiences:', contactError);
        // Continue execution so the email is still sent
      }
    }

    // Send the email via Resend
    const data = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO as string,
      subject: `[Portfolio] ${subject || 'New Lead'} from ${firstname}`,
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Last Name:</strong> ${lastname || 'N/A'}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Objective:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f4f4f5; padding: 15px; border-radius: 8px;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
      `,
    });

    if (data.error) {
       return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
