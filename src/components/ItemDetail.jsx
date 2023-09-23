import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ItemCount } from "./ItemCount";
import Error404 from './Error404'
import { CartContext } from "../contexts/CartContext";


export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const onAdd = (count) => addItem(product, count);
    return (

        product ?
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageId} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    {/* <Card.Text>{coderHouse}</Card.Text> */}
                    <Card.Text>{`Stock ${product.stock}`}</Card.Text>
                    <Card.Text>{`$${product.price}`}</Card.Text>
                    <ItemCount onAdd={onAdd} stock={product.stock} />
                    <Link to={"/"}>
                        <Button variant="primary">Volver</Button>
                    </Link>
                </Card.Body>
            </Card> : <Error404 />
    );
};
