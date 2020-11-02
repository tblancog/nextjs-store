import { Col } from 'react-bootstrap';
import Product from '../../components/Product/Product';

const ProductList = ({ products }) => {
  return products.map((product) => (
    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      <Product product={product} />
    </Col>
  ));
};

export default ProductList;
