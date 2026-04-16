import {FloatingLabel, Form} from "react-bootstrap";
import PropTypes from "prop-types";

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

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool,
    error: PropTypes.string
};

export default Input;