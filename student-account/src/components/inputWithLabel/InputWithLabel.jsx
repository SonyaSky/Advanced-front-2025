import React from 'react';
import './input.css';

const InputWithLabel = ({type, label}) => {
    return (
        <div className="input-container">
            <input type={type} id="input" required />
            <label htmlFor="input">{label}</label>
        </div>
    );
};

export default InputWithLabel;