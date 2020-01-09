// @ts-check

require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withWorkers = require('@zeit/next-workers');
const withOffline = require('next-offline');
const withMDX = require('@next/mdx');

const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require('next/constants');

function chain(ls, nextConfig)
{
	return ls.reduce((nextConfig, fn) =>
	{
		return fn(nextConfig)
	}, nextConfig)
}

module.exports = chain([
	(nextConfig) =>
	{
		console.dir(nextConfig, {
			depths: 4,
		});

		return nextConfig;
	},
], chain([

	withOffline,
	withCSS,
	withSass,
	//withWorkers,

	withMDX(),

], {
	env: {
		// Reference a variable that was defined in the .env file and make it available at Build Time
		TEST_VAR: process.env.TEST_VAR,

		PHASE_DEVELOPMENT_SERVER,
		PHASE_PRODUCTION_BUILD,

		SECRET: process.env.SECRET,
	},

//	workboxOpts: {
//		swDest: process.env.NEXT_EXPORT
//			? 'service-worker.js'
//			: 'static/service-worker.js',
//		runtimeCaching: [
//			{
//				urlPattern: /^https?.*/,
//				handler: 'NetworkFirst',
//				options: {
//					cacheName: 'offlineCache',
//					expiration: {
//						maxEntries: 200,
//					},
//				},
//			},
//		],
//	},
//	experimental: {
//		async rewrites() {
//			return [
//				{
//					source: '/service-worker.js',
//					destination: '/_next/static/service-worker.js',
//				},
//			]
//		},
//	},

	pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],

}));
