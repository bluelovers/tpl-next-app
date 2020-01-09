import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			display: 'inline-block',
			margin: theme.spacing(1),
			position: 'relative',
		},
		buttonSuccess: {
			backgroundColor: green[500],
			'&:hover': {
				backgroundColor: green[700],
			},
		},
		buttonProgress: {
			color: green[500],
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginTop: -12,
			marginLeft: -12,
		},
	}),
);

export default function DateLoading(props)
{
	const [date, setDate] = useState(null);

	const classes = useStyles(props);
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	setTimeout(() =>
	{
		if (!date && !loading)
		{
			setSuccess(false);
			setLoading(true);
		}
	}, 100);

	useEffect(() =>
	{
		async function getDate()
		{
			const res = await fetch('/api/date');
			const newDate = await res.json();
			setDate(newDate);

			setTimeout(() =>
			{
				setSuccess(true);
				setLoading(false);
			}, 1000)
		}

		getDate();
	}, []);

	return (
		<div className={classes.wrapper}>
			<Button
			variant="contained"
			color="primary"
			className={buttonClassname}
			disabled={loading}
		>
			{date ? date.date : 'loading...'}
		</Button>
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</div>
	);
}
