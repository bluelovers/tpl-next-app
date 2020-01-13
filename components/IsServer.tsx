import React from 'react';

export default () => {

	console.log(`isServer`, String(typeof window === 'undefined'));

	return <>
		server: {String(typeof window === 'undefined')} {process.browser.toString()}
	</>;
}
