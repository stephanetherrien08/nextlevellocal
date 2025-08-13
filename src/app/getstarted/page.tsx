import { Resend } from 'resend';
import { redirect } from 'next/navigation';
import { adminEmailHtml, userEmailHtml } from '@/lib/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default function GetStartedPage() {
  async function send(formData: FormData) {
    'use server';
    if (formData.get('company_website')) return redirect('/getstarted/thanks');

    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const phone = String(formData.get('phone') || '');
    const business = String(formData.get('business') || '');
    const goals = String(formData.get('goals') || '');
    const notes = String(formData.get('notes') || '');
    const apt = String((formData.get('apt') as string) || '');

    // Admin notification
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      reply_to: email || undefined,
      subject: `New Get Started: ${name}`,
      html: adminEmailHtml({ name, email, phone, business, goals, notes, apt }),
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Business: ${business}`,
        `Goals: ${goals}`,
        `Notes:\n${notes}`,
      ].join('\n'),
    });

    // Optional confirmation to client
    if (email) {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: email,
        subject: 'We received your questionnaire',
        html: userEmailHtml(name),
        text: `Hi ${name || ''},\n\nThanks for sharing your details. We’ll review and follow up shortly.\n\n— NextLevelLocal`,
      });
    }

    redirect('/getstarted/thanks');
  }

  return (
    <main className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Get Started</h1>
        <p className="mt-2 text-slate-600">Tell us a bit about your business and goals.</p>

        <form action={send} className="mt-6 grid gap-4">
          {/* honeypot */}
          <input name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
          {/* if you pass ?apt=XYZ in the link (from Setmore), preserve it */}
          <input type="hidden" name="apt" defaultValue="" />

          <input name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input name="phone" placeholder="Phone (optional)" />
          <input name="business" placeholder="Business name" />
          <textarea name="goals" rows={4} placeholder="What are you hoping to achieve?" />
          <textarea name="notes" rows={4} placeholder="Anything else we should know?" />
          <button className="btn btn-brand w-fit" type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
