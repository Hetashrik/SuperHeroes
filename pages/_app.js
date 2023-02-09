// first file so load vey first

import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// bringing the layout

// have import this layout to here because it will loaded to all the pages as navbar loaded everytime in all pages
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
