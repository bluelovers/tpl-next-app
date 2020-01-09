import React from 'react';
//import { Link, NavLink, withRouter } from "react-router-dom";
//import { browserHistory } from "react-router";
//import { Link as Link2 } from "react-router-relative-link";
//import { Link, NavLink } from '@shhhplus/react-router-relative-link';
import Link from 'next/link'
import Bluebird from 'bluebird'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ButtonTheme } from '../../components/PrefersLightMode';

//function RLink({ to, ...rest })
//{
//	console.dir(document.createElement('a').href)
//
//	const realTo = resolve('', to);
//	return <NavLink {...rest} to={realTo} />;
//}

const Header = dynamic(() => Bluebird.resolve(import('../../components/demo/header')).delay(1000), {
	loading: () => <p>...wait 1sec</p> ,
	ssr: false,
});

function Item(props)
{
	const router = useRouter();
	console.dir(router);
	return <li>Click{' '}<Link href={props.children}><a>{props.children}</a></Link></li>;
}

export default () => (
	<>
		<Header />
		<ul>
			<Item>/demo/styled-components</Item>
			<Item>/demo/styled-components/2</Item>
			<Item>/demo/styled-components/material-ui</Item>
		</ul>

		<ButtonTheme>Switch Theme Mode</ButtonTheme>
	</>
);
