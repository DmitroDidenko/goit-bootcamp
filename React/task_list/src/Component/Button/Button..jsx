import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({text, onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    );
};

Button.defaultProps = {
    type: null,
    onClick: () => '',
};

Button.propTypes = {
    onclick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

export default Button;