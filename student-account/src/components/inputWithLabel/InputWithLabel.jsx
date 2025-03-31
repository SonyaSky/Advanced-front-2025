import React, {useState} from 'react';
import './input.css';

const InputWithLabel = ({type, label, onChange}) => {
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (type === 'email' && !emailPattern.test(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        onChange(e);
        validateEmail(value); 
    };

    return (
        <div className="input-container">
            <input type={type} required onChange={handleChange}/>
            <label >{label}</label>
            {error && <span className="error-message">bad input</span>}
        </div>
    );
};

export default InputWithLabel;