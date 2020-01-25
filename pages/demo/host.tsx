import React from 'react';

const HostInfo = (prop: ReturnType<typeof HostInfo.getInitialProps>) => {

	let win: Window;

	if (typeof window !== 'undefined')
	{
		win = window;
	}

	return <div>
		<div>windowOrigin {win?.location?.origin}</div>
		<div>windowHost {win?.location?.host}</div>
		<hr/>
		<div>windowOrigin {prop.windowOrigin}</div>
		<div>windowHost {prop.windowHost}</div>
		<div>reqHeadersHost {prop.reqHeadersHost}</div>
		<div>xNowDeploymentUrl {prop.xNowDeploymentUrl}</div>
	</div>
};

HostInfo.getInitialProps = (ctx) => {

	if (ctx.ctx)
	{
		ctx = ctx.ctx;
	}

	let { req } = ctx;

	let win: Window;

	if (typeof window !== 'undefined')
	{
		win = window;
	}

	return {
		windowOrigin: win?.location?.origin,
		windowHost: win?.location?.host,
		reqHeadersHost: req?.headers?.host,
		xNowDeploymentUrl: req?.headers?.['x-now-deployment-url'],
	}
};

export default HostInfo
