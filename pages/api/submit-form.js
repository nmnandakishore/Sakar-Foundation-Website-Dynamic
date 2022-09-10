// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendFormEmail } from '../../helpers/email-manager';

export default async function handler(req, res) {
	let reqBody = req.body;
	let formName = reqBody.formName;
	let data = reqBody.data;
	// let visitorEmail = data.email ? data.email : null;
	let visitorEmail = null;

	if (data.email || data.Email) {
		if (data.email) {
			visitorEmail = data.email
		} else if (data.Email) {
			visitorEmail = data.Email
		}
	}


	try {
		await sendFormEmail(
			{
				visitorEmail: visitorEmail,
				formName: formName,
				data: data
			}
		)
	} catch (err) {
		console.error(err);
		res.status(200).json({
			type: 'error',
			message: 'The submission could not be saved. Please resubmit the form.'
		})
	};

	res.status(200).json({
		type: 'success',
		message: 'We have recieved your submission. We will contact you shortly. Thank you.'
	})
}