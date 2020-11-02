import Link from 'next/link';
import Product from '../../src/components/Product/Product';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from 'react-bootstrap';
import Rating from '../../src/components/Rating';
import products from '../../src/products';
export const ProductScreen = ({ product }) => (
  <Container>
    <Link href="/">
      <button className="btn btn-light my-3">Go Back</button>
    </Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'Available' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      {/* <Product product={product} /> */}
    </Row>
  </Container>
);
export default ProductScreen;

export function getServerSideProps({ query: { id } }) {
  return {
    props: {
      product: products.find(({ _id }) => _id === id),
    },
  };
}
