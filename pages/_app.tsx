import React from 'react'
import App, { Container } from 'next/app';
//import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../assets/styles/nprogress.css'
import { createMuiTheme, darken, fade, ThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

Router.events.on('routeChangeStart', url =>
{
	console.log(`Loading: ${url}`)
	NProgress.start()
});
Router.events.on('routeChangeComplete', () =>
{
	console.log(`routeChangeComplete`)
	NProgress.done()
});
Router.events.on('routeChangeError', () =>
{
	console.log(`routeChangeError`)
	NProgress.done()
});

export default class MyApp extends App
{
	render()
	{
		const { Component, pageProps } = this.props;
		return (
				<React.StrictMode>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</React.StrictMode>
		)
	}
}
