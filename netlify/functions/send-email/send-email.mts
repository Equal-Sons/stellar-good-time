import type { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

export const handler: Handler = async (event) => {
	try {
		if (event.httpMethod !== "POST") {
			return {
				statusCode: 405,
				body: JSON.stringify({ okay: false, error: "Method not allowed" }),
			};
		}

		const requestBody = JSON.parse(event.body ?? "{}") as {
			firstName: string;
			lastName: string;
			email: string;
			service: string;
			message: string;
		};

		const name = `${requestBody.firstName} ${requestBody.lastName}`.trim();
		const { email, service, message } = requestBody;

		sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

		await sgMail.send({
			to: ["justin@equalsons.com", "hello@stellargoodtime.com"],
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

		return {
			statusCode: 200,
			body: JSON.stringify({ okay: true }),
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: 500,
			body: JSON.stringify({
				okay: false,
				error: error instanceof Error ? error.toString() : "Unknown error",
			}),
		};
	}
};

export default handler;
