import React from 'react';
import { BrowserRouter, Route, Router, useLocation } from "react-router-dom";
//import { Link, NavLink, withRouter } from "react-router-dom";
//import { browserHistory } from "react-router";
//import { Link as Link2 } from "react-router-relative-link";
//import { Link, NavLink } from '@shhhplus/react-router-relative-link';
import Link from 'next/link'

import { useRouteMatch } from 'react-router-dom';
import { resolve } from 'url';

//function RLink({ to, ...rest })
//{
//	console.dir(document.createElement('a').href)
//
//	const realTo = resolve('', to);
//	return <NavLink {...rest} to={realTo} />;
//}

import { createMemoryHistory } from 'history';
import Bluebird from 'bluebird'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Header = dynamic(() => Bluebird.resolve(import('../../components/demo/header')).delay(5000), {
	loading: () => <p>...wait 5sec</p> ,
	ssr: false,
});

const history = createMemoryHistory();

function Item(props)
{
	const router = useRouter();
	console.dir(router);
	return <li>Click{' '}<Link href={props.children}><a>{props.children}</a></Link></li>;
}

export default () => (
	<Router history={history}>
		<Header />
		<ul>

			<Item href="/demo/styled-components">/demo/styled-components</Item>
			<Item href="/demo/styled-components">/demo/styled-components/2</Item>
		</ul>
	</Router>
);
