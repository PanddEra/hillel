import {FloatingLabel, Form} from "react-bootstrap";

function Input({
                   id,
                   name,
                   label = name,
                   placeholder = 'Enter your text',
                   className,
                   type = 'text',
                   value,
                   onChange
               }) {
    return (
        <Form.Group className={className}>
            <FloatingLabel label={label} controlId={`floating-input-${name}`}>
                <Form.Control
                    key={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </FloatingLabel>
        </Form.Group>
    );
}

export default Input;