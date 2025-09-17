import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import Footer from '@/components/Footer';

const insertwhateverburningthisis =
  "@media (prefers-color-scheme: dark) {.dontburnmyeyesoutplz:{background:'#121212';}}";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <style
            dangerouslySetInnerHTML={{ __html: insertwhateverburningthisis }}
          ></style>
        </Head>

        <body className='dontburnmyeyesoutplz flex  min-h-screen flex-col dark:bg-zinc-900'>
          <div className='flex-grow'>
            <Main />
          </div>
          <NextScript />
          <Footer />
          <script
            defer
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon='{"token": "475084a0a0e84c4d9de2ae8796c29b36"}'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
