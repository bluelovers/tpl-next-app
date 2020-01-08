import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../../components/demo/header'

const Post = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<Header />
			<h1>Post: {id}</h1>
			<ul>
				<li>
					<Link href="/demo/post/[id]/[comment]" as={`/demo/post/${id}/first-comment`}>
						<a>First comment</a>
					</Link>
				</li>
				<li>
					<Link href="/demo/post/[id]/[comment]" as={`/demo/post/${id}/second-comment`}>
						<a>Second comment</a>
					</Link>
				</li>
			</ul>
		</>
	)
}

export default Post
