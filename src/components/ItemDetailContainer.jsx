import { Container } from 'react-bootstrap';
import { ItemDetail } from "./ItemDetail";
import { useItemDetail } from "../hooks/useItemDetail";


function Detalle() {
    const product = useItemDetail()
    if (!product) return <div>Loading...</div>
    return (
        <Container className='container-productos'>
            {
                <ItemDetail product={product} />
            }
        </Container>
    )
}
export default Detalle;

