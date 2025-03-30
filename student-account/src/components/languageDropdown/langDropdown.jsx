import React, {useState} from 'react';
import { DropdownButton, Image, Col, Row, Navbar, Container, Dropdown } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import './langDropdownStyle.css';

const DropdownTitle = ({ title, image, isOpen }) => {
    return (
        <Row className='gx-2 align-items-center'> 
            <Col xs={6} className="d-flex align-items-center"> 
                <div className='d-none d-sm-block language'>{title}</div>
            </Col>
            <Col xs={3} className="d-flex align-items-start" >
            <Image src={image} />
            </Col>
            <Col xs={4} className='d-flex justify-content-end arrow' >
            <Image src={isOpen ? "Chevron_Up.svg" : "Chevron_Down.svg"} fluid/>
            </Col>
        </Row>
    );
}

const DropdownELement = ({title, image}) => {
    return (
        <Row className='gx-2 align-items-center lang-option'> 
            <Col className="d-flex align-items-center"> 
                <div className='language'>{title}</div>
            </Col>
            <Col className='d-flex justify-content-end'>
            <Image src={image} fluid/>
            </Col>
        </Row>
    );
}


const LangDropdown = () => {
    const [t, i18n] = useTranslation("login");
    const [isOpen, setIsOpen] = useState(false);

    const ToEngish = () => {
        ChangeLanguage('en');
    }

    const ToRussian = () => {
        ChangeLanguage('ru');

    }

    const ChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <Navbar className="navbar" fixed='top'>      
            <Col className='d-flex justify-content-end dropdown-container'>
            <Dropdown onToggle={(isOpen) => setIsOpen(isOpen)} >
            <Dropdown.Toggle id="dropdown-basic-button">
            <DropdownTitle title={t("login.lang")} image={t("login.image")} isOpen={isOpen}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-content'>
            <Dropdown.Item onClick={ToEngish} className='element'><DropdownELement title="English" image="UNITED_KINGDOM_1_.svg" /></Dropdown.Item>
            <Dropdown.Divider className='divider align-items-center'/>
            <Dropdown.Item onClick={ToRussian} className='element'><DropdownELement title="Русский" image="RUSSIA_1_.svg" /></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>
        </Navbar>
    );
};

export default LangDropdown;
