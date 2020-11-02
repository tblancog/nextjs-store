import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Rating from '../Rating';

const Product = ({
  product: { _id, image, name, rating, numReviews, price },
}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link href={`/product/${_id}`}>
        <a>
          <Card.Img src={image} variant="top" />
        </a>
      </Link>
      <Card.Body>
        <Link href={`/product/${_id}`}>
          <a>
            <Card.Title as="div">
              <strong>{name}</strong>
            </Card.Title>
          </a>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
