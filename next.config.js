// @ts-check

require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = withSass(withCSS({
	env: {
		// Reference a variable that was defined in the .env file and make it available at Build Time
		TEST_VAR: process.env.TEST_VAR,

		PHASE_DEVELOPMENT_SERVER,
		PHASE_PRODUCTION_BUILD,

		SECRET: process.env.SECRET,
	},

}));
