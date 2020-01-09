import { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment-timezone';

let defaultTimeZone = "Asia/Taipei";
moment.tz.setDefault(defaultTimeZone);

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
	const date = moment();

	res.json({
		date: date.format(),
		unix: date.unix(),
		timestamp: date.valueOf(),
	})
}
