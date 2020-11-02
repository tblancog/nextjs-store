import './css/bootstrap.min.css';
import './css/index.css';
import '../src/Icons/FontAwesomeIcons';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Container } from 'react-bootstrap';

const App = ({ Component, pageProps }) => (
  <>
    <Header />
    <main className="py-3">
      <Container>
        <Component {...pageProps} />
      </Container>
    </main>
    <Footer />
  </>
);
export default App;
