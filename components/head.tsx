import React from 'react'
import NextHead from 'next/head'
import { string, InferProps } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props: InferProps<typeof Head.propTypes>) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ''}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		<link rel="manifest" href="/manifest.json" />
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
};

export default Head
