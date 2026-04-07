import {ListGroup} from "react-bootstrap";
import Item from '../Item'
import PropTypes from "prop-types";

function ItemsList({items, onEdit, onDelete}) {
    return (
        <ListGroup>
            {items.map(item => <ListGroup.Item key={item.id}><Item item={item} onEdit={onEdit} onDelete={onDelete}/></ListGroup.Item>)}
        </ListGroup>
    )
}
ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default ItemsList;