import {Button, Form} from "react-bootstrap";
import Input from "./Input";
import {useFormik} from "formik";
function UserForm({onSubmit, initialValues, validationSchema, inputs, formTitle, formButton}) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            const userdata = {
                name: values.name,
                username: values.username,
                email: values.email,
                phone: values.phone,
                website: values.website,
                company: {
                    name: values.companyName
                },
                address: {
                    city: values.addressCity,
                    street: values.addressStreet
                }
            }
            onSubmit(JSON.stringify(userdata));
            formik.resetForm()
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

export default UserForm;