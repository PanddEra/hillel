import {Button, Form} from "react-bootstrap";
import Input from "../InputField";
import {useFormik} from "formik"; 
function ItemForm({onSubmit, initialValues, validationSchema, inputs, formTitle, formButton}) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="p-3 border rounded shadow-sm">
            <h4 className="mb-3">{formTitle}</h4>
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
                {formButton}
            </Button>
        </Form>
    );
}

export default ItemForm;