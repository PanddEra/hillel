import AddItemForm from "./components/Form/AddItemForm";
import { useState } from "react";
import uuid from 'uuid-random';
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import Item from "./components/Item";

function App() {
    const [todoItems, setTodoItems] = useState([]);

    const handleSubmit = (data) => {
        const newTodo = {
            ...data,
            id: uuid(),
            completed: false
        };
        
        setTodoItems(prev => [newTodo, ...prev]);
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4">Add item</h1>

                    <AddItemForm onSubmit={handleSubmit}/>

                    <ListGroup className="mt-4">
                        {todoItems.map(item => <Item key={item.id} item={item}/>)}
                    </ListGroup>

                    {todoItems.length === 0 && (
                        <p className="text-center mt-3 text-muted">List is empty. It's time to add something!</p>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default App;