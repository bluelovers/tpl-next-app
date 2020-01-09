import React, { useState, Dispatch, SetStateAction, useEffect, ReactNode } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Button } from '@material-ui/core';
import { ButtonTypeMap } from '@material-ui/core/Button/Button';

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

export let setTheme: Dispatch<SetStateAction<ThemeOptions | Theme>>;

export function ButtonTheme(props: ButtonTypeMap["props"] & {
	children: string | ReactNode,
})
{
	const theme = useTheme();

	let click = () =>
	{
		setTheme({
			palette: {
				type: (theme.palette.type !== 'light') ? 'light' : 'dark',
			},
		});
	};

	return (<Button variant="contained" color="secondary" {...props} onClick={click}/>)
}

export default function (props)
{
	let bool = prefersLightMode();
	let theme: ThemeOptions | Theme;

	([theme, setTheme] = useState({
		palette: {
			type: bool ? 'light': 'dark'
		}
	}));

	useEffect(() =>
	{
		async function getDate()
		{
			setTheme({
				palette: {
					type: bool ? 'light': 'dark'
				}
			})
		}

		getDate();
	}, []);

	// @ts-ignore
	const muiTheme = createMuiTheme(theme);

	return (<MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>)
}
