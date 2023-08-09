import Card from 'react-bootstrap/Card';

function ItemListContainer(props) {
    return (
        <Card style={{textAlign: 'center'}}>
            <Card.Header as="h5" >{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.subTitle}</Card.Title>
                <Card.Text>
                    {props.greetings}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemListContainer;