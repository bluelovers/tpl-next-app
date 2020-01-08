import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
	const date = new Date().toISOString()
		.replace(/T/, ' ')
		.replace(/\..+/, '')

	res.json({ date })
}
