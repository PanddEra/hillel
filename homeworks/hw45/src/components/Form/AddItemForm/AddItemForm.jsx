import {Button, Form} from "react-bootstrap";
import Input from "../InputField";
import {useFormik} from "formik";
import {validationSchema, initialValues, inputs} from "./formConfig.js";

function AddItemForm({onSubmit}) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="p-3 border rounded shadow-sm">
            <h4 className="mb-3">New Item</h4>
            {inputs.map((input) => (
                <Input
                    key={input.id}
                    name={input.name}
                    label={input.label}
                    className={input.className}
                    type={input.type}
                    value={input.type !== "checkbox" ? formik.values[input.name] : undefined}
                    checked={input.type === "checkbox" ? formik.values[input.name] : undefined}
                    onChange={formik.handleChange}
                    touched={formik.touched[input.name]}
                    error={formik.errors[input.name]}
                />
            ))}

            <Button
                type="submit"
                variant="primary"
                className="w-100 mt-2"
            >
                Add Item
            </Button>
        </Form>
    );
}

export default AddItemForm;