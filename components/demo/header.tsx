import Link from 'next/link'

const Header = () => (
	<header>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/demo">
					<a>Demo</a>
				</Link>
			</li>
			<li>
				<Link href="/demo/post/[id]" as="/demo/post/first">
					<a>First Post</a>
				</Link>
			</li>
			<li>
				<Link href="/demo/post/[id]" as="/demo/post/second">
					<a>Second Post</a>
				</Link>
			</li>
		</ul>
	</header>
)

export default Header
