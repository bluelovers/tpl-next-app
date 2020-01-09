import { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment-timezone';
import { Settings, DateTime } from 'luxon';

let defaultTimeZone = "Asia/Taipei";
//moment.tz.setDefault(defaultTimeZone);
Settings.defaultZoneName = defaultTimeZone;

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
//	const date = moment();
	const date = DateTime.local();

	res.json({
		date: date.toString(),
		unix: date.toSeconds(),
		timestamp: date.valueOf(),
	})
}
