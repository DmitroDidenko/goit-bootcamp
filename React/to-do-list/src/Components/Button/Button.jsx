import React from 'react';
import PropTypes from 'prop-types'
import styles from './Button.css';

const Button = ({type, text, onClick}) => {
    return (
        <button type={type} className={styles.btn} onClick={onClick}>{text}</button>
    )
};

Button.defaultProps = {
    type: null,
    onClick: () => '',
};

Button.protoTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button
