import {FloatingLabel, Form} from "react-bootstrap";

function Input({
                   id,
                   name,
                   label = name,
                   className,
                   type = 'text',
                   value,
                   onChange,
                   touched,
                   error
               }) {
    return (
        <Form.Group className={className}>
                <FloatingLabel label={label} controlId={`floating-input-${name}`}>
                    <Form.Control
                        key={id}
                        as={type === 'textarea' ? 'textarea' : 'input'}
                        type={type !== 'textarea' ? type : undefined}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </FloatingLabel>
            <Form.Text className="text-danger">
                {touched && error ? error : null}
            </Form.Text>
        </Form.Group>
    );
}
export default Input;