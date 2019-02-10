import React, {Component} from 'react';
import PropTypes from "prop-types";

export const RenderIf = (props) => {
    // Проверяем условие props.condition
    if (props.condition) {
        return props.children;        // Рендерим то, что между тегами
    } else {
        return null;        // Ничего не рендерим
    }
};

RenderIf.propTypes = {
    condition: PropTypes.bool,
    children: PropTypes.any
};

export default RenderIf;