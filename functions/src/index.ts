import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vsnghy.org@gmail.com',
        pass: process.env.EMAIL_PASSWORD // This will be set in Firebase environment variables
    }
});

export const sendContactEmail = functions.https.onCall(async (data, context) => {
    const { name, email, message, selectedInterest } = data;

    const mailOptions = {
        from: 'vsnghy.org@gmail.com',
        to: 'vsnghy.org@gmail.com',
        subject: `New Contact Form Submission - ${selectedInterest}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Area of Interest:</strong> ${selectedInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new functions.https.HttpsError('internal', 'Error sending email');
    }
}); 