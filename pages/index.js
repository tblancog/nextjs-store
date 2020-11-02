import { Row } from 'react-bootstrap';
import ProductList from '../src/components/Product/ProductList';

const Home = (props) => (
  <>
    <h1>Latest Products</h1>
    <Row>
      <ProductList {...props} />
    </Row>
  </>
);
export default Home;

export async function getServerSideProps() {
  const products = await (
    await fetch(`${process.env.API_URL}/products`)
  ).json();
  return {
    props: {
      products,
    },
  };
}
