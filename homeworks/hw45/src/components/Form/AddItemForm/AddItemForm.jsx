import ItemForm from "../ItemForm/";
import {initialValues, validationSchema, inputs} from "../ItemForm/formConfig.js";
import PropTypes from "prop-types";

function AddItemForm({onSubmit}) {
    return (
        <ItemForm onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} inputs={inputs} formTitle="Create New Item" formButton="Add Item"></ItemForm>
    );
}
AddItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default AddItemForm;