import { Resend } from 'resend';

// Este é o único handler para o POST
export async function onRequestPost(context) {
  const { request, env } = context;

  const resend = new Resend(env.RESEND_API_KEY);
  const fromEmail = env.FROM_EMAIL;

  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail], // Você pode colocar outro destinatário se quiser
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
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
