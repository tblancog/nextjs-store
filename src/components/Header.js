import Head from 'next/head';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to ProShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Link href="/">
              <a>
                <Navbar.Brand>Proshop</Navbar.Brand>
              </a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link href="/cart" passHref>
                  <Nav.Link>
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  </Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>
                    <FontAwesomeIcon icon={faUser} /> Sign In
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
