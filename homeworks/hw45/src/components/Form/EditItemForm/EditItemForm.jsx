import ItemForm from "../ItemForm/index.js";
import {inputs, validationSchema} from "../ItemForm/formConfig.js";
import ModalGenerator from "../../ModalGenerator/index.js";

function EditItemForm({onSubmit, editingItemId, setEditingItemId, items, showModal, setShowModal, handleCloseModal}) {
    return (
        <ModalGenerator
            show={showModal}
            onHide={handleCloseModal}
            header="Edit Item"
            body={
                <ItemForm
                    show={showModal}
                    onSubmit={onSubmit}
                    initialValues={items.find(item => item.id === editingItemId)}
                    validationSchema={validationSchema}
                    inputs={inputs}
                    formTitle={'Edit item' + items.find(item => item.id === editingItemId).title}
                    formButton="Save Changes"
                />
            }
            footer={null}
        />    );
}
export default EditItemForm;
