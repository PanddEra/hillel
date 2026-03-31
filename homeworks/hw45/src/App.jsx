import AddItemForm from "./components/Form/AddItemForm";
import { useState } from "react";
import uuid from 'uuid-random';
import {Container, Row, Col, Button} from "react-bootstrap";
import ItemsList from "./components/ItemsList/List";
import ModalGenerator from "./components/Form/ModalGenerator";

function App() {
    const [items, setItems] = useState([]); //TODO: add/get items to/from localStorage

    const handleAddItemFormSubmit = (data) => {
        const newItem = {
            ...data,
            id: uuid()
        };
        setItems(prev => [newItem, ...prev]);
    }
    
    const handleDeleteItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }

    const handleEditItem = (id) => {
        console.log("handleEditItem")
        return <ModalGenerator header='Edit Item' body={<AddItemForm onSubmit={(data) => {
            const newItem = {
                ...data,
                id: id
            };
            setItems(prev => [newItem, ...prev]);
        }}/>}/>
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4">Add new item</h1>
                    <AddItemForm onSubmit={handleAddItemFormSubmit}/>
                </Col>
                <Col md={6}>
                    <h1 className="text-center mb-4">Items List</h1>
                    <ItemsList items={items} onDelete={handleDeleteItem} onEdit={handleEditItem}/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;