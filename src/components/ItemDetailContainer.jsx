import data from "../data/data.json";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Error404 from './Error404'
import { ItemCount } from "./ItemCount";
import { Container } from 'react-bootstrap';

function Detalle() {
    const { Id } = useParams();
    const [product, setProduct] = useState(null)
    console.log(Id)
    useEffect(() => {
        if (Id) {
            const productFilteredById = data.filter(
                product => product.id === Number(Id)
            )[0]
            setProduct(productFilteredById)
        }
    }, [Id])
    return (
        <Container className='container-productos'>
            {
                product ?
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.src} />
                        <Card.Body>
                            <Card.Title>{product.producto}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <ItemCount />
                            <Link to={"/"}>
                                <Button variant="primary">Volver</Button>
                            </Link>
                        </Card.Body>
                    </Card> : <Error404 />
            }
        </Container>
    )
}
export default Detalle;

