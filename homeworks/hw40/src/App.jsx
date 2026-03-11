import FormTodo from "./components/Form/FormTodo";
import { useState } from "react";
import uuid from 'uuid-random';
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import TodoItem from "./components/TodoItem";

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

    const toggleTodo = (id) => {
        setTodoItems(prev => prev.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4">Task List</h1>
                    <h5 className="text-center mb-4">Made with React</h5>

                    <FormTodo onSubmit={handleSubmit}/>

                    <ListGroup className="mt-4">
                        {todoItems.map(item => <TodoItem key={item.id} item={item} onToggle={toggleTodo}/>)}
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