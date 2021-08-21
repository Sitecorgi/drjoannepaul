import Document, { Html, Head, Main, NextScript } from 'next/document'

class OverideDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Serif+Display" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default OverideDocument