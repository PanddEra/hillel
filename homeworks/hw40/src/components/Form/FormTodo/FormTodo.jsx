import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {inputs, initialValues} from "./formConfig.js";
import Input from "../Input";

function FormTodo({onSubmit}) {
    const [data, setData] = useState(initialValues);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setData(prev => ({ //updating state with function, for safety
            ...prev,
            [name]: value
        }));
    };

    const canSubmit = inputs.every(input =>
        data[input.name] && data[input.name].trim().length > 0
    );

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
        setData(initialValues);
    };

    return (
        <Form onSubmit={handleOnSubmit} className="p-3 border rounded shadow-sm">
            <h4 className="mb-3">New Task</h4>
            {inputs.map((input) => (
                <Input
                    key={input.id}
                    {...input}
                    as={input.type === 'textarea' ? 'textarea' : undefined}
                    value={data[input.name]}
                    onChange={handleOnChange}
                />
            ))}
            <Button
                disabled={!canSubmit}
                type="submit"
                variant="primary"
                className="w-100 mt-2"
            >
                Add Todo
            </Button>
        </Form>
    );
}

export default FormTodo;