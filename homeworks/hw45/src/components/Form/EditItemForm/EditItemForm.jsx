import ItemForm from "../ItemForm/index.js";
import {initialValues, inputs, validationSchema} from "../ItemForm/formConfig.js";
import ModalGenerator from "../../ModalGenerator/index.js";
import PropTypes from "prop-types";

function EditItemForm({onSubmit, editingItemId, items, showModal, handleCloseModal}) {
    return (
        <ModalGenerator
            show={showModal}
            onHide={handleCloseModal}
            header="Edit Item"
            body={
                <ItemForm
                    show={showModal}
                    onSubmit={onSubmit}
                    initialValues={items.find(item => item.id === editingItemId) || initialValues}
                    validationSchema={validationSchema}
                    inputs={inputs}
                    formTitle={'Edit item' + items.find(item => item.id === editingItemId).title}
                    formButton="Save Changes"
                />
            }
            footer={null}
        />    );
}

EditItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    editingItemId: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired
}

export default EditItemForm;
