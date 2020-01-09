import React, { useEffect, useState } from 'react'
//import Link from 'next/link'
import { useAmp } from 'next/amp'
import Head from '../components/head'
import Nav from '../components/nav'
import '../assets/styles/style.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Layout from '../components/demo/Layout'
import DateLoading from '../components/demo/api/Date';
import { maxWidth } from '@material-ui/system';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			margin: '80px auto 40px;',
			maxWidth: '100%',
		},
		rootColumn: {
			flexDirection: 'column',
		},
		paper: {
			width: 220,
			padding: theme.spacing(2),
			textAlign: 'center',
			//color: theme.palette.text.secondary,
		},
	}),
);

const OLink = (props) => (<Link color="inherit" target="_blank" rel="noopener" {...props} />);

const Home = () =>
{
	const classes = useStyles({});

	const [spacing, setSpacing] = React.useState<GridSpacing>(2);

	return (
		<Layout>
			<Head title="Home" />

			<div>
				<Nav />
			</div>

			<div className="hero">
				<h1 className="title example">Welcome to Next!</h1>

				<Grid container className={classes.root + ' ' + classes.rootColumn}>
					<Typography align="center">To get started, edit the <code>pages/index.js</code> or <code>pages/api/date.ts</code> files, then save to reload.</Typography>
					<Grid>The date is:&nbsp; <DateLoading /></Grid>
				</Grid>

				<Grid className={classes.root} container justify="center" spacing={spacing}>
					<Grid item>
						<Paper className={classes.paper}>
							<OLink href='https://github.com/zeit/next.js#setup'>
								<h3>Getting Started &rarr;</h3>
								<Typography>Learn more about Next.js on GitHub and in their examples.</Typography>
							</OLink>
						</Paper>
					</Grid>

					<Grid item>
						<Paper className={classes.paper}>
							<OLink href='https://github.com/zeit/next.js/tree/master/examples'>
								<h3>Examples &rarr;</h3>
								<Typography>Find other example boilerplates on the Next.js GitHub.</Typography>
							</OLink>
						</Paper>
					</Grid>

					<Grid item>
						<Paper className={classes.paper}>
							<OLink href='https://github.com/zeit/next.js'>
								<h3>Create Next App &rarr;</h3>
								<Typography>Was this tool helpful? Let us know how we can improve it!</Typography>
							</OLink>
						</Paper>
					</Grid>
				</Grid>

			</div>

			<style jsx>{`
        .hero {
          width: 100%;
        }
        .title {
          margin: auto;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
		</Layout>
	)
}

export default Home
