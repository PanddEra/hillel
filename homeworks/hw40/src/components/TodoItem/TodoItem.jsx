import {Badge, ListGroup} from "react-bootstrap";

function TodoItem({item, onToggle}) {
    return (
        <ListGroup.Item
            style={{ cursor: 'pointer', transition: '0.3s' }}
            className={`d-flex justify-content-between align-items-center ${item.completed ? "bg-secondary-subtle" : "bg-success-subtle"}`}
            onClick={() => onToggle(item.id)}
        >
            <div >
                <strong>{item.title}</strong>
                <p className="mb-0 text-muted small">{item.description}</p>
            </div>
            
            <Badge bg={item.completed ? "secondary" : "success"} pill>
                {item.completed ? "Done" : "To Do"}
            </Badge>
        </ListGroup.Item>
    );
}

export default TodoItem;