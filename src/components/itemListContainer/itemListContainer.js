import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from "../../data/data.json";
import { Container } from 'react-bootstrap';
// import {ItemCount} from "../ItemCount";



function ItemListContainer(props) {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([])


    useEffect(() => {
        if (categoryId) {
            const productsFilteredByCategory = data.filter(
                product => product.tipoProducto === categoryId
            )
            setProducts(productsFilteredByCategory)
        } else {
            setProducts(data)
        }
    }, [categoryId])
    return (
        <Container className='container-productos'>
            {
                products.map(product => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.src} />
                        <Card.Body>
                            <Card.Title>{product.producto}</Card.Title>
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
            }
        </Container>
    )
}

export default ItemListContainer;