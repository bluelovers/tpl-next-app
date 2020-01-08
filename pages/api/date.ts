import { NextApiRequest, NextApiResponse } from 'next'

/**
 * https://nextjs.org/docs/api-routes/api-middlewares
 */
export let config: {
	api?: {
		bodyParser?: false | {
			sizeLimit?: string,
		},
	},
};

export default (req: NextApiRequest, res: NextApiResponse) =>
{
	const date = new Date().toISOString()
		.replace(/T/, ' ')
		.replace(/\..+/, '')

	res.json({ date })
}
