import {FloatingLabel, Form, FormLabel} from "react-bootstrap";

function Input({
                   id,
                   name,
                   label = name,
                   className,
                   type = 'text',
                   value,
                   checked,
                   onChange,
                   touched,
                   error
               }) {
    return (
        <Form.Group className={className}>
            {type !== 'checkbox' ?
                <FloatingLabel label={label} controlId={`floating-input-${name}`}>
                    <Form.Control
                        key={id}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </FloatingLabel>
                :
                <Form.Check
                    key={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    label={label}
                />
            }


            <Form.Text className="text-danger">
                {touched && error ? error : null}
            </Form.Text>
        </Form.Group>
    );
}

export default Input;