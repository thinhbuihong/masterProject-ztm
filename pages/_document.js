import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return <Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>

			</Head>

			<body>
				<Main></Main>
				<NextScript />
			</body>
		</Html>
	}
}
export default MyDocument;