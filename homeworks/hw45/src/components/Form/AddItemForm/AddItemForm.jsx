import ItemForm from "../ItemForm/";
import {initialValues, validationSchema, inputs} from "../ItemForm/formConfig.js";

function AddItemForm({onSubmit}) {
    return (
        <ItemForm onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} inputs={inputs} formTitle="Create New Item" formButton="Add Item"></ItemForm>
    );
}

export default AddItemForm;