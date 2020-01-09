import React, { useState } from "react";
import NoSsr from '@material-ui/core/NoSsr';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useEffect } from 'react';
import { useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export function prefersLightMode()
{
	try
	{
		return useMediaQuery('(prefers-color-scheme: light)');
	}
	catch (e)
	{

	}
}

export default function (props)
{
	let bool = prefersLightMode();

	const [theme, setTheme] = useState({
		palette: {
			type: bool ? 'light': 'dark'
		}
	});

	useEffect(() =>
	{
		async function getDate()
		{
			//console.log(`prefersLightMode:1`, prefersLightMode());

			setTheme({
				palette: {
					type: bool ? 'light': 'dark'
				}
			})
		}

		getDate();
	}, []);

	//console.log(`prefersLightMode:2`, bool);

	// @ts-ignore
	const muiTheme = createMuiTheme(theme);

	return (<MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>)
}
