import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../styles/nprogress.css'

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

Router.events.on('routeChangeStart', url => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
	console.log(`routeChangeComplete`)
	NProgress.done()
})
Router.events.on('routeChangeError', () => {
	console.log(`routeChangeError`)
	NProgress.done()
})

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
