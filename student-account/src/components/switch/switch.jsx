import React, {useState} from 'react';

import './switchStyle.css';

const Switch = ({checked, disabled, onClick}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isDisabled, setIsDisabled] = useState(disabled);

    const ToggleSwitch = () => {
        setIsChecked(isDisabled ? isChecked: !isChecked);
        onClick;
    }
    return (
        <>
        <button 
        type='button'
        className={`toggle-btn ${isChecked? "checked": ""} ${isDisabled? "disabled": ""}`}
        onClick={ToggleSwitch}>
        <div className='thumb'></div>
        </button>
        </>
    );
};

export default Switch;