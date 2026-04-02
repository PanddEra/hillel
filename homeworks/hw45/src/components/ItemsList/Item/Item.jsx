import {Badge, Button, Card, Carousel, ListGroup} from "react-bootstrap";
import PropTypes from "prop-types";

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

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountedPrice: PropTypes.number,
        category: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        sku: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        mainImgUrl: PropTypes.string,
        additionalImgUrl: PropTypes.string,
        isActive: PropTypes.bool.isRequired,
        isAvailable: PropTypes.bool.isRequired,
        showOnHomePage: PropTypes.bool.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Item;