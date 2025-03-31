"use server";

import sgMail from "@sendgrid/mail";

export async function sendEmail(formData: {
	firstName: string;
	lastName: string;
	email: string;
	service: string;
	message: string;
}) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

	const name = `${formData.firstName} ${formData.lastName}`;
	const { email, service, message } = formData;

	await sgMail.send({
		to: "hello@stellargoodtime.com",
		from: process.env.SENDGRID_SENDER_EMAIL as string,
		replyTo: email,
		subject: `New contact from: ${name}`,
		text: `
      A new contact submission has been received. Here are the details:\n\n
      Name: ${name}\n
      Email: ${email}\n
      Service: ${service}\n
      Message: ${message}\n\n
    `,
	});
}
