import { Container } from 'react-bootstrap';
import { useProductsList } from '../../hooks/useItemList';
import { Item } from "../Item";



function ItemListContainer(props) {

    const { products } = useProductsList()
    if (!products.length)  return <div>Loading...</div>
    return (
        <Container className='container-productos'>
            { 
                <Item products={products}/>
            }
        </Container>

    )
}

export default ItemListContainer;