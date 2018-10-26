import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
    const {
        className,
        type,
        style,
        onClick,
        children,
    } = props;
    return (
        <button
            type={type}
            className={`Button${className ? ` ${className}` : ''}`}
            {...{ style, onClick }}
        >
            { children }
        </button>
    );
};

export default Button;
