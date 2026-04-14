import * as Yup from "yup";

export const inputs = [
    {id: 1, name: "name", label: 'Name', className:'mb-3', type: 'text'},
    {id: 2, name: "username", label: 'Username', className:'mb-3', type: 'text'},
    {id: 3, name: "email", label: 'Email', className:'mb-3', type: 'email'},
    {id: 4, name: "phone", label: 'Phone', className:'mb-3', type: 'tel'},
    {id: 5, name: "website", label: 'Website', className:'mb-3', type: 'text'},
    {id: 6, name: "companyName", label: 'Company', className:'mb-3', type: 'text'},
    {id: 7, name: "addressCity", label: 'City', className:'mb-3', type: 'text'},
    {id: 8, name: "addressStreet", label: 'Street', className:'mb-3', type: 'name'},
];

export const validationSchema = Yup.object(
    {
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .required("Name is required"),
        username: Yup.string()
            .required("Username is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        phone: Yup.string()
            .required("Phone is required"),
        website: Yup.string()
            .required("Website is required"),
        companyName: Yup.string()
            .required("Company name is required"),
        addressCity: Yup.string()
            .required("City is required"),
        addressStreet: Yup.string()
            .required("Street is required")
    }
);

export const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
    addressCity: "",
    addressStreet: ""
}