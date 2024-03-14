import { Resend } from 'resend';


export class ResendRepo {
    private apiKey: string;
    private from: string;
    private to: string;
    private displayName: string | undefined;

    constructor(apiKey: string, from: string, to: string, displayName?: string) {
        this.apiKey = apiKey;
        this.from = displayName ? `${displayName} <${from}>` : from;
        this.to = to;
        this.displayName = displayName;


    }

    async sendContactEmail(name: string, email: string, content: string) {
        const resend = new Resend(this.apiKey);
        const emailBody = this.createTemplate(name, email, content);

        const data = await resend.emails.send({
            from: this.from,
            to: this.to,
            subject: `New Contact, ${name}`,
            html: emailBody,
        });
    }

    private createTemplate(name: string, email: string, content: string) {
        return `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Form Submission by ${name}</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <h2 style="color: #333;">New Form Submission</h2>
                <hr style="border-top: 1px solid #ccc;">
        
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Content:</strong> ${content}</p>
        
                <p style="margin-top: 20px; font-size: 0.8em; color: #888;">This email was generated automatically. Please do not reply.</p>
            </div>
        
        </body>
        </html>`
    }
}