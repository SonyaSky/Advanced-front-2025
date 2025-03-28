import React from "react";

import './button.css'

const Button = ({text, className, disabled}) => {
    return (
        <button className={className} disabled={disabled}>
            {text}
        </button>

    );
}

export default Button;