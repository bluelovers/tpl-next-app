import React from 'react'
import Link from 'next/link'
import Header from './demo/header';

const links = [
	{ href: 'https://zeit.co/now', label: 'ZEIT', key: undefined },
	{ href: 'https://github.com/zeit/next.js', label: 'GitHub', key: undefined },
].map(link =>
{
	link.key = `nav-link-${link.href}-${link.label}`
	return link
})

const Nav = () => (
	<nav>

		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			{links.map(({ key, href, label }) => (
				<li key={key}>
					<a href={href}>{label}</a>
				</li>
			))}
		</ul>

		<Header />

		<style jsx>{`
      :global(body) {}
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
	</nav>
)

export default Nav
