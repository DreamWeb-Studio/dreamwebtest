import { Resend } from 'resend';

const DEFAULT_TO_EMAIL = 'marcel.kondracki@wp.pl';
const DEFAULT_FROM_EMAIL = 'onboarding@resend.dev';
const MAX_FIELD_LENGTH = 4000;

const json = (response, status, payload) => {
  response.status(status).json(payload);
};

const readBody = async (request) => {
  if (request.body && typeof request.body === 'object') return request.body;
  if (request.body && typeof request.body === 'string') return JSON.parse(request.body);

  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
};

const clean = (value, maxLength = MAX_FIELD_LENGTH) => String(value || '').trim().slice(0, maxLength);

const cleanList = (value) => {
  if (!Array.isArray(value)) return [];
  return value.map((item) => clean(item, 300)).filter(Boolean);
};

const cleanRecord = (value) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => {
      if (Array.isArray(item)) return [clean(key, 80), cleanList(item)];
      return [clean(key, 80), clean(item, 600)];
    }),
  );
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const hasPrivacyAccepted = (value) => value === true;

const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return entities[char];
});

const withLineBreaks = (value) => escapeHtml(value || 'Nie podano').replace(/\n/g, '<br>');

const sentAt = () => new Date().toLocaleString('pl-PL', {
  timeZone: 'Europe/Warsaw',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const field = (label, value) => `${label}: ${value || 'Nie podano'}`;

const formatRecord = (record) => {
  const entries = Object.entries(record || {});
  if (!entries.length) return 'Nie podano';
  return entries.map(([key, value]) => {
    if (Array.isArray(value)) return `${key}: ${value.length ? value.join(', ') : 'Nie podano'}`;
    return `${key}: ${value || 'Nie podano'}`;
  }).join('\n');
};

const formatRowsHtml = (rows) => rows.map(([label, value]) => `
  <tr>
    <td style="padding:10px 14px;border-bottom:1px solid #e8eaf2;color:#5c6475;font-size:13px;width:170px;">${escapeHtml(label)}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #e8eaf2;color:#171b26;font-size:14px;font-weight:600;">${withLineBreaks(value)}</td>
  </tr>
`).join('');

const formatRecordHtml = (record) => {
  const rows = Object.entries(record || {}).map(([key, value]) => {
    if (Array.isArray(value)) return [key, value.length ? value.join(', ') : 'Nie podano'];
    return [key, value || 'Nie podano'];
  });
  return rows.length ? formatRowsHtml(rows) : formatRowsHtml([['Konfiguracja', 'Nie podano']]);
};

const buildEmailHtml = ({ title, intro, rows, messageLabel, message, configuration }) => `
  <div style="margin:0;padding:24px;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;color:#171b26;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e8eaf2;border-radius:18px;overflow:hidden;">
      <div style="padding:26px 28px;background:#121523;color:#ffffff;">
        <p style="margin:0 0 8px;color:#b8c0d8;font-size:13px;letter-spacing:.08em;text-transform:uppercase;">DreamWeb Studio</p>
        <h1 style="margin:0;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
        ${intro ? `<p style="margin:12px 0 0;color:#d7dcf0;font-size:15px;line-height:1.6;">${escapeHtml(intro)}</p>` : ''}
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        ${formatRowsHtml(rows)}
      </table>
      ${messageLabel ? `
        <div style="padding:20px 28px;border-top:1px solid #e8eaf2;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#171b26;">${escapeHtml(messageLabel)}</h2>
          <div style="margin:0;color:#2b3142;font-size:15px;line-height:1.7;">${withLineBreaks(message)}</div>
        </div>
      ` : ''}
      ${configuration ? `
        <div style="padding:20px 28px;border-top:1px solid #e8eaf2;">
          <h2 style="margin:0 0 14px;font-size:16px;color:#171b26;">Podsumowanie konfiguracji</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border:1px solid #e8eaf2;border-radius:12px;overflow:hidden;">
            ${formatRecordHtml(configuration)}
          </table>
        </div>
      ` : ''}
    </div>
  </div>
`;

const buildContactEmail = (payload) => {
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 80);
  const topic = clean(payload.topic, 160);
  const message = clean(payload.message);
  const date = sentAt();

  if (!name) return { error: 'Podaj imię.' };
  if (!email || !isValidEmail(email)) return { error: 'Podaj poprawny e-mail.' };
  if (!topic) return { error: 'Wybierz typ sprawy.' };
  if (!message) return { error: 'Napisz wiadomość.' };

  const rows = [
    ['Imię', name],
    ['E-mail', email],
    ['Telefon', phone],
    ['Typ sprawy', topic],
    ['Źródło', 'formularz kontaktowy'],
    ['Polityka prywatności zaakceptowana', 'tak'],
    ['Data wysłania', date],
  ];

  return {
    subject: 'Nowa wiadomość z formularza DreamWeb Studio',
    replyTo: email,
    text: [
      'Nowa wiadomość z formularza DreamWeb Studio',
      '',
      ...rows.map(([label, value]) => field(label, value)),
      '',
      'Wiadomość:',
      message,
    ].join('\n'),
    html: buildEmailHtml({
      title: 'Nowa wiadomość z formularza DreamWeb Studio',
      intro: 'Ktoś wysłał wiadomość przez formularz kontaktowy na stronie.',
      rows,
      messageLabel: 'Wiadomość',
      message,
    }),
  };
};

const buildConfiguratorEmail = (payload) => {
  const contact = cleanRecord(payload.contact);
  const configuration = cleanRecord(payload.configuration);
  const name = clean(contact.name, 120);
  const email = clean(contact.email, 180);
  const phone = clean(contact.phone, 80);
  const date = sentAt();

  if (!name) return { error: 'Podaj imię.' };
  if (!email && !phone) return { error: 'Podaj e-mail albo telefon.' };
  if (email && !isValidEmail(email)) return { error: 'Podaj poprawny e-mail.' };

  const rows = [
    ['Imię', name],
    ['E-mail', email],
    ['Telefon', phone],
    ['Nazwa firmy', contact.company],
    ['Źródło', 'konfigurator projektu'],
    ['Polityka prywatności zaakceptowana', 'tak'],
    ['Data wysłania', date],
  ];

  return {
    subject: 'Nowa konfiguracja projektu — DreamWeb Studio',
    replyTo: email || undefined,
    text: [
      'Nowa konfiguracja projektu — DreamWeb Studio',
      '',
      'Dane kontaktowe:',
      ...rows.map(([label, value]) => field(label, value)),
      '',
      'Dodatkowa wiadomość:',
      contact.message || 'Nie podano',
      '',
      'Konfiguracja:',
      formatRecord(configuration),
    ].join('\n'),
    html: buildEmailHtml({
      title: 'Nowa konfiguracja projektu — DreamWeb Studio',
      intro: 'Użytkownik przeszedł konfigurator i zostawił dane kontaktowe.',
      rows,
      messageLabel: 'Dodatkowa wiadomość',
      message: contact.message || 'Nie podano',
      configuration,
    }),
  };
};

const sendEmail = async ({ subject, text, html, replyTo }) => {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  if (!apiKey) {
    return { error: 'Brakuje konfiguracji wysyłki po stronie serwera.' };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    text,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error('Resend send error:', error);
    return { error: 'Resend odrzucił wiadomość.' };
  }

  return { ok: true };
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { ok: false, message: 'Method not allowed' });
  }

  try {
    const payload = await readBody(request);
    const honeypot = clean(payload.companyWebsite || payload.website || payload.honeypot, 300);

    if (honeypot) {
      return json(response, 200, { ok: true });
    }

    if (!hasPrivacyAccepted(payload.privacyAccepted)) {
      return json(response, 400, { ok: false, message: 'Aby wysłać formularz, zaakceptuj politykę prywatności.' });
    }

    const source = clean(payload.source, 80);
    const email = source === 'configurator' ? buildConfiguratorEmail(payload) : buildContactEmail(payload);

    if (email.error) {
      return json(response, 400, { ok: false, message: email.error });
    }

    const result = await sendEmail(email);
    if (result.error) {
      return json(response, 500, { ok: false, message: result.error });
    }

    return json(response, 200, { ok: true });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return json(response, 500, { ok: false, message: 'Nie udało się obsłużyć formularza.' });
  }
}
