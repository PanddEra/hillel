import AddItemForm from "./components/Form/AddItemForm";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import {Container, Row, Col} from "react-bootstrap";
import ItemsList from "./components/ItemsList/List";
import EditItemForm from "./components/Form/EditItemForm/EditItemForm.jsx";

function App() {
    const [items, setItems] = useState([]); //TODO: add/get items to/from localStorage
    const [showModal, setShowModal] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);

    const handleAddItemFormSubmit = (data) => {
        const newItem = {
            ...data,
            id: uuidv4()
        };
        setItems(prev => [newItem, ...prev]);
        console.log(items)
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
                <Col md={4}>
                    <div style={{ position: "sticky", top: "20px" }}>
                        <h1 className="text-center mb-4">Add new item</h1>
                        <AddItemForm onSubmit={handleAddItemFormSubmit} />
                    </div>
                </Col>
                <Col md={8}>
                    <h1 className="text-center mb-4">Items List</h1>
                    <Row>
                        {items.map(item => (
                            <Col key={item.id} lg={6}>
                                <ItemsList
                                    items={[item]}
                                    onDelete={handleDeleteItem}
                                    onEdit={handleEditItem}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {showModal && <EditItemForm
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
                handleCloseModal={handleCloseModal}
                editingItemId={editingItemId}
                setEditingItemId={setEditingItemId}
                items={items} setItems={setItems}
                showModal={showModal}
                setShowModal={setShowModal}
            />}
        </Container>
    )
}

export default App;