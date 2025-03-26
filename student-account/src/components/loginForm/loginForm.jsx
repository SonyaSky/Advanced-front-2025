import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Row, Col, Image, Button} from 'react-bootstrap';

import { useTheme } from "../../contexts/themeContext";
import InputWithLabel from "../inputWithLabel/InputWithLabel";
import './loginFormStyle.css';
import Switch from "../switch/switch";

const loginForm = () => {
    const { theme, toggleLanguage, currentTranslations } = useTheme();
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    return(
        <>
        <Row>
        <Col>
        <Image src="login_pic.svg" fluid />
        </Col>
        <Col>
        <Card className="card">
            <Card.Body id="body">
                <Form>
                <Card.Title className="login-title text-center">
                    {currentTranslations.title}
                </Card.Title>
                <InputWithLabel type="email" label={currentTranslations.email}></InputWithLabel>
                <InputWithLabel type="password" label={currentTranslations.password}></InputWithLabel>
                </Form>
                <Row>
                    <Col xs={2}>
                        <Switch
                        checked={isChecked}
                        disabled={isDisabled}
                        />
                    </Col>
                    <Col >
                        <Card.Text>{currentTranslations.toggle}</Card.Text>
                    </Col>
                </Row>
                <div className="d-grid gap-2">
                <Button className="enter-btn">
                {currentTranslations.enter}
                </Button>
                </div>
            </Card.Body>
        </Card>
      </Col>
      </Row>
        </>
    );
};

export default loginForm;