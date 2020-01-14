import React from 'react';

export default () => {

	console.log(`isServer`, String(typeof window === 'undefined'));

	return <span>
		server: {String(typeof window === 'undefined')} {process.browser.toString()}
	</span>;
}
