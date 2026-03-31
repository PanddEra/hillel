import {Badge, Button, Card, Carousel, ListGroup} from "react-bootstrap";

function Item({item, onDelete, onEdit}) {
    return (
        <Card>
            <Carousel>
                <Carousel.Item>
                    <Card.Img variant="top" src={item.mainImgUrl}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img variant="top" src={item.additionalImgUrl ? item.additionalImgUrl : item.mainImgUrl}/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: {item.price}</ListGroup.Item>
                <ListGroup.Item>Discounted Price: {item.discountedPrice}</ListGroup.Item>
                <ListGroup.Item>Category: {item.category}</ListGroup.Item>
                <ListGroup.Item>Brand: {item.brand}</ListGroup.Item>
                <ListGroup.Item>SKU: {item.sku}</ListGroup.Item>
                <ListGroup.Item>Quantity: {item.quantity}</ListGroup.Item>
                <ListGroup.Item>Is active: {item.isActive ? <Badge bg="success">Yes</Badge> : <Badge bg="danger">No</Badge>}</ListGroup.Item>
                <ListGroup.Item>Is available: {item.isAvailable ? <Badge bg="success">Yes</Badge> : <Badge bg="danger">No</Badge>}</ListGroup.Item>
                <ListGroup.Item>Show on home page: {item.showOnHomePage ? <Badge bg="success">Yes</Badge> : <Badge bg="danger">No</Badge>}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button className='me-2' onClick={() => onEdit(item.id)} variant="warning">Edit</Button>
                <Button className='me-2' onClick={() => onDelete(item.id)} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;