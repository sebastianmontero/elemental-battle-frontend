import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
    const {
        className,
        type,
        style,
        onClick,
        children,
        loading,
    } = props;
    return (
        <button
            type={type}
            className={`Button${className ? ` ${className}` : ''}${loading ? ' loading' : ''}`}
            {...{ style, onClick }}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    loading: false,
};

export default Button;
