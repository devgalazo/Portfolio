"use client";

export const runtime = 'edge';  // Configuração para Edge Runtime

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  const { email, subject, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, fromEmail], // Altere para o destinatário correto
      subject,
      html: `
      <h2>Nova mensagem do site</h2>
      <p><strong>De:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
