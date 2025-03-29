import React from 'react';
import './input.css';

const InputWithLabel = ({type, label, onChange}) => {
    return (
        <div className="input-container">
            <input type={type} required onChange={onChange}/>
            <label >{label}</label>
        </div>
    );
};

export default InputWithLabel;