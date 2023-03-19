import "../styles/globals.css";
import "@bekk/storybook/build/lib/constants/styles.css";
import "@bekk/storybook/build/lib/fonts/webfonts.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>#pizza</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <meta name="theme-color" content="#FF9900" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
