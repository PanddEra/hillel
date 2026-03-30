import * as Yup from "yup";

export const inputs = [
    {id: 1, name: "title", label: 'Title', className:'mb-3', type: 'text'},
    {id: 2, name: "description", label: 'Description', className:'mb-3', type: 'textarea'},
    {id: 3, name: "price", label: 'Price', className:'mb-3', type: 'number'},
    {id: 4, name: "discountedPrice", label: 'Discounted Price', className:'mb-3', type: 'number'},
    {id: 5, name: "category", label: 'Category', className:'mb-3', type: 'text'},
    {id: 6, name: "brand", label: 'Brand', className:'mb-3', type: 'text'},
    {id: 7, name: "sku", label: 'SKU', className:'mb-3', type: 'text'},
    {id: 8, name: "quantity", label: 'Quantity', className:'mb-3', type: 'number'},
    {id: 9, name: "mainImgUrl", label: 'Main image (URL)', className:'mb-3', type: 'text'},
    {id: 10, name: "additionalImgUrls", label: 'Additional images (URLs)', className:'mb-3', type: 'textarea'},
    {id: 11, name: "isActive", label: 'Is active', className:'mb-3', type: 'checkbox'},
    {id: 12, name: "isAvailable", label: 'Is available', className:'mb-3', type: 'checkbox'},
    {id: 13, name: "showOnHomePage", label: 'Show on home page', className:'mb-3', type: 'checkbox'}
];

export const validationSchema = Yup.object(
    {
        title: Yup.string()
            .min(3, "Title must be at least 3 characters")
            .required("Title is required"),
        description: Yup.string()
            .min(10, "Description must be at least 10 characters")
            .required("Description is required"),
        price: Yup.number()
            .min(1, "Price must be greater than 0")
            .required("Price is required"),
        discountedPrice: Yup.number()
            .max(0, "Discounted price must be less than regular price"),
        category: Yup.string().required("Category is required"),
        brand: Yup.string().required("Brand is required"),
        sku: Yup.string().required("SKU is required"),
        quantity: Yup.number()
            .min(0, "Quantity must be greater than or equal to 0")
            .required("Quantity is required"),
        mainImgUrl: Yup.string().url("Invalid URL"),
        additionalImgUrl: Yup.string().url("Invalid URL"),
        isActive: Yup.boolean(),
        isAvailable: Yup.boolean(),
        showOnHomePage: Yup.boolean(),
    }
);

export const initialValues = {
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    category: "",
    brand: "",
    sku: "",
    quantity: "",
    mainImgUrl: "",
    additionalImgUrls: "",
    isActive: true,
    isAvailable: true,
    showOnHomePage: false
}