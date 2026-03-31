import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }
  try {
    const body = await request.json();
    const { firstname, lastname, email, subject, message } = body;

    // Validate required fields
    if (!firstname || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email via Resend
    const data = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO as string,
      subject: `[Aifloxium] ${subject || 'New Lead'} from ${firstname}`,
      html: `
        <h2>New Contact Submission from Aifloxium.com</h2>
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
