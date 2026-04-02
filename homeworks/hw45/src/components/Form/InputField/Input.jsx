import {FloatingLabel, Form} from "react-bootstrap";
import PropTypes from "prop-types";

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
                        as={type === 'textarea' ? 'textarea' : 'input'}
                        type={type !== 'textarea' ? type : undefined}
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

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};

export default Input;