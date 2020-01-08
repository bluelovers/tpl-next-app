import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

class Layout extends React.Component
{
	render()
	{
		const { children } = this.props;
		return <div className="layout">{children}</div>
	}
}

export default class MyApp extends App
{
	render()
	{
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={theme}>
					<Component {...pageProps} />
			</ThemeProvider>
		)
	}
}
