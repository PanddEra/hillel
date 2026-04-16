import {Button, Form} from "react-bootstrap";
import Input from "./Input";
import {useFormik} from "formik";
import PropTypes from "prop-types";
function UserForm({onSubmit, initialValues, validationSchema, inputs, formTitle, formButton}) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <h4 className="mb-3">{formTitle}</h4>
            {inputs.map((input) => (
                <Input
                    key={input.id}
                    name={input.name}
                    label={input.label}
                    className={input.className}
                    type={input.type}
                    value={formik.values[input.name]}
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

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    validationSchema: PropTypes.object,
    inputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string.isRequired,
            label: PropTypes.string,
            className: PropTypes.string,
            type: PropTypes.string
        })
    ).isRequired,
    formTitle: PropTypes.string,
    formButton: PropTypes.string
};

export default UserForm;