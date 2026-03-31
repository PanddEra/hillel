import AddItemForm from "./components/Form/AddItemForm";
import { useState } from "react";
import uuid from 'uuid-random';
import {Container, Row, Col} from "react-bootstrap";
import ItemsList from "./components/ItemsList/List";
import ModalGenerator from "./components/Form/ModalGenerator";

function App() {
    const [items, setItems] = useState([]); //TODO: add/get items to/from localStorage
    const [showModal, setShowModal] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);

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
        setEditingItemId(id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingItemId(null);
    };

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
            {showModal && (
                <ModalGenerator
                    show={showModal}
                    onHide={handleCloseModal}
                    header="Edit Item"
                    body={
                        <AddItemForm
                            onSubmit={(data) => {
                                const updatedItem = {
                                    ...data,
                                    id: editingItemId
                                };
                                setItems(prev =>
                                    prev.map(item =>
                                        item.id === editingItemId ? updatedItem : item
                                    )
                                );
                                handleCloseModal();
                            }}
                        />
                    }
                    footer={null}
                />
            )}
        </Container>
    )
}

export default App;