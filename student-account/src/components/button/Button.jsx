import React from "react";

import './button.css'

const Button = ({text, className, disabled, type, onCLick, onSubmit}) => {
    return (
        <button className={className} disabled={disabled} type={type} onClick={onCLick} onSubmit={onSubmit}>
            {text}
        </button>

    );
}

export default Button;