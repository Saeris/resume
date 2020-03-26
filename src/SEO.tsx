import React from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
	title?: string;
	description?: string;
	username?: string;
	image?: string;
}

export const SEO: React.FC<SEOProps> = ({
	title = `saeris.io - Drake Costa Resume 2020`,
	description = `Drake Costa - Full-Stack JavaScript Engineer`,
	username = `@saeris`,
	image = `/share-card.png`
}) => (
	<Helmet title={title}>
		// Site Metadata
		<html lang="en" />
    <meta name="description" content={description} />
    <meta name="image" content={image} />
		// Facebook
		<meta property="og:site_name" content={title} />
		<meta property="og:locale" content="en_US" />
		<meta property="og:url" content="https://saeris.io" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content={description} />
		// Twitter
		<meta name="twitter:creator" content={username} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={description} />
	</Helmet>
)
