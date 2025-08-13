export function adminEmailHtml(data: {
  name: string; email: string; phone: string; business: string; goals: string; notes: string; apt?: string;
}) {
  const { name, email, phone, business, goals, notes, apt } = data;
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
    <tr><td style="padding:24px">
      <h1 style="margin:0 0 12px;font-size:20px">New Get Started submission</h1>
      ${apt ? `<p style="margin:0 0 16px;color:#475569">Appointment ID: <b>${apt}</b></p>` : ''}
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;background:#fff;border:1px solid #e5e7eb;border-radius:12px">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Business', business)}
        ${row('Goals', goals)}
        ${row('Notes', notes)}
      </table>
    </td></tr>
  </table>`;
  function row(label: string, value: string) {
    return `<tr>
      <td style="border-bottom:1px solid #f1f5f9;color:#475569;white-space:nowrap">${label}</td>
      <td style="border-bottom:1px solid #f1f5f9;font-weight:600">${escapeHtml(value || '—')}</td>
    </tr>`;
  }
  function escapeHtml(s: string) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
  }
}

export function userEmailHtml(name: string) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
    <tr><td style="padding:24px">
      <h1 style="margin:0 0 12px;font-size:20px">Thanks${name ? `, ${escapeHtml(name)}` : ''}!</h1>
      <p style="margin:0 0 12px;color:#475569">We received your questionnaire and will follow up shortly.</p>
      <p style="margin:0;color:#475569">— NextLevelLocal</p>
    </td></tr>
  </table>`;
  function escapeHtml(s: string) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
  }
}
