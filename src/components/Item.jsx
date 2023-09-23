import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({ products }) => (
        // <>hola</>
        products.map(product => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageId} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    {/* <ItemCount/> */}
                    <Link to={`/item/${product.id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        ))
)