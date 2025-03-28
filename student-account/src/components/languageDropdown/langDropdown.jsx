import React, {useState} from 'react';
import { DropdownItem, Image, Col, Row, Navbar, Container } from 'react-bootstrap';

import './langDropdownStyle.css';
import DropdownContent from './dropdownContent';

const LangDropdown = () => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {    
        setOpen((open) => !open);
      };
    return (
        <Navbar className="navbar" fixed='top'>
            <Col md={{ span: 2, offset: 10 }}>
            <button className='dropdown-btn' onClick={toggleDropdown}>
            <Row className="g-0"> 
            <Col className='language col-6'> 
                Русский
            </Col>
            <Col className="col-5"> 
                <Container className="d-flex px-2 "> 
                    <Image src="RUSSIA_1_.svg" fluid />
                    <Image src="Chevron_Down.svg" fluid width="50%"/>
                </Container>
            </Col>
            </Row>
            </button>
            </Col>
            <DropdownContent open={open}/>
        </Navbar>
    );
};

export default LangDropdown;
