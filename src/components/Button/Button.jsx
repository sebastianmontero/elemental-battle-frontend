import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
    const {
        className,
        type,
        style,
        onClick,
        children,
        isLoading,
    } = props;
    return (
        <button
            type={type}
            className={`Button${className ? ` ${className}` : ''}${isLoading ? ' loading' : ''}`}
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
