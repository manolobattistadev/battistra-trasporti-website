import { Resend } from 'resend';

const resend = new Resend('re_LDdxEhkr_QL1MCLQmpfYWy3uyZ6GoVydU');

export default async function handler(req, res) {
    console.log(req, res)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {  html } = req.body;

        // Validate required fields
        if (!html) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: 'noreplay@battistatrasporti.it',
            to: 'battistatrasporti1963@gmail.com',
            subject: 'Richiesta sito',
            html,
        });

        res.status(200).json({ message: 'Email sent successfully', emailResponse });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    } catch (error: never) {
        console.error('Failed to send email:', error?.response?.data || error.message);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
