import {Button, Form} from "react-bootstrap";
import Input from "../InputField";
import {useFormik} from "formik";
import PropTypes from "prop-types";
function ItemForm({onSubmit, initialValues, validationSchema, inputs, formTitle, formButton}) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm()
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="product-form">
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
            <Button 
                type="reset"
                variant="secondary"
                onClick={formik.handleReset}
                className="w-100 mt-2">
                Clear Form
            </Button>
        </Form>
    );
}

ItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    validationSchema: PropTypes.object.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    formTitle: PropTypes.string.isRequired,
    formButton: PropTypes.string.isRequired
}

export default ItemForm;