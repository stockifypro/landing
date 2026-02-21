import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Configuración SMTP
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 2525);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || '"Stockify.pro" <noreply@stockify.pro>';
const contactEmail = process.env.CONTACT_EMAIL || 'thevega82@gmail.com';

// Transporter reutilizable
const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Solo permitir POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { name, company, email, phone, website, message } = req.body;

        // Validación
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Los campos nombre, email y mensaje son obligatorios',
            });
        }

        // Verificar config SMTP
        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error('[contact] Variables SMTP no configuradas');
            return res.status(500).json({ error: 'Configuración de email no disponible' });
        }

        // Email HTML con diseño
        const htmlContent = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: #ffffff; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">
            📬 Nueva solicitud de prueba gratuita
          </h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 13px; width: 140px; vertical-align: top;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 13px; vertical-align: top;">Empresa</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 14px;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 14px;">
                <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 13px; vertical-align: top;">Teléfono</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 14px;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #9ca3af; font-size: 13px; vertical-align: top;">Tienda Shopify</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #ffffff; font-size: 14px;">
                ${website ? `<a href="${website}" style="color: #818cf8; text-decoration: none;">${website}</a>` : '—'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #9ca3af; font-size: 13px; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="margin: 0; color: #6b7280; font-size: 11px;">Enviado desde stockify.pro — formulario de contacto</p>
        </div>
      </div>
    `;

        const textContent = [
            `Nueva solicitud de prueba gratuita`,
            ``,
            `Nombre: ${name}`,
            `Empresa: ${company || '—'}`,
            `Email: ${email}`,
            `Teléfono: ${phone || '—'}`,
            `Tienda Shopify: ${website || '—'}`,
            ``,
            `Mensaje:`,
            message,
        ].join('\n');

        await transporter.sendMail({
            from: smtpFrom,
            to: contactEmail,
            replyTo: email,
            subject: `🔔 Nueva solicitud — ${name} (${company || 'Sin empresa'})`,
            html: htmlContent,
            text: textContent,
        });

        console.log(`[contact] Email enviado: ${name} <${email}>`);
        return res.status(200).json({ message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('[contact] Error:', error);
        return res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
}
