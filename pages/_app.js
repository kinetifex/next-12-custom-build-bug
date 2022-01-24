import App from 'next/app';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async function getInitialProps(appContext) {
  return await App.getInitialProps(appContext);
};

export default MyApp
