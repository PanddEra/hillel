import {ListGroup} from "react-bootstrap";
import Item from '../Item'

function ItemsList({items, onEdit, onDelete}) {
    return (
        <ListGroup>
            {items.map(item => <ListGroup.Item key={item.id}><Item item={item} onEdit={onEdit} onDelete={onDelete}/></ListGroup.Item>)}
        </ListGroup>
    )
}

export default ItemsList;