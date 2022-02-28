import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class OverideDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-54770192-1"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-54770192-1', { page_path: window.location.pathname });
            `,
          }}
        />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM+Serif+Display"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default OverideDocument;
