import React, {useState} from 'react';

import './switchStyle.css';

const Switch = ({checked, disabled}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isDisabled, setIsDisabled] = useState(disabled);
    return (
        <>
        <button 
        className={`toggle-btn ${isChecked? "checked": ""} ${isDisabled? "disabled": ""}`}
        onClick={()=>setIsChecked(isDisabled ? isChecked: !isChecked)}
        >
        <div className='thumb'></div>
        </button>
        </>
    );
};

export default Switch;