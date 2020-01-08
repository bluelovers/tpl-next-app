import Link from 'next/link'
import { useAmp } from 'next/amp';

const Header = () => {
	const isAmp = useAmp()

	return (
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
				<li>
					<Link href={isAmp ? '/demo/amp/dog?amp=1' : '/demo/amp/dog'} as="/demo/amp/dog">
						<a>demo/amp/dog</a>
					</Link>
				</li>
				<li>
					<Link href="/demo/nprogress/forever">
						<a>Forever</a>
					</Link>
				</li>
				<li>
					<a href="./non-existing">Non Existing Page</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
