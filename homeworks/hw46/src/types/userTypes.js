import PropTypes from "prop-types";

export const userShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
        name: PropTypes.string
    }),
    address: PropTypes.shape({
        city: PropTypes.string,
        street: PropTypes.string
    })
});