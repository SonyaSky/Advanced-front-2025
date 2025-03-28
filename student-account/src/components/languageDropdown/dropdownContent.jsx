import React, {useState} from 'react';
import { DropdownItem, Image, Col, Row, Navbar, Container } from 'react-bootstrap';

import './langDropdownStyle.css';

const DropdownContent = ({open}) => {
    const onCLick = () => {
        console.log(value);
    }
    return (
        <div>
            <div
            className={`dropdown-content ${open ? "content-open" : null}`}
            >
            <div className="dropdown-item" value='en' onClick={onCLick}>
                <span>
                    English
                </span>
                <Image src="UNITED_KINGDOM_1_.svg" fluid />
            </div>
            <div className="dropdown-item" value='ru' onClick={onCLick}>
                <span>
                    Русский
                </span>
                <Image src="RUSSIA_1_.svg" fluid />
            </div>
            </div>
        </div>

    );
};

export default DropdownContent;
