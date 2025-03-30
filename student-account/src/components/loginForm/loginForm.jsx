import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Row, Col, Image} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import { useTheme } from "../../contexts/themeContext";
import InputWithLabel from "../inputWithLabel/InputWithLabel";
import './loginFormStyle.css';
import Switch from "../switch/switch";
import LangDropdown from "../languageDropdown/langDropdown";
import Button from "../button/Button";

const loginForm = () => {
    const { theme } = useTheme();
    const [t, i18n] = useTranslation("login");
    const [isChecked, setIsChecked] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ChangeEmail = (e) => {    
        setEmail(e.target.value);
      };

    const ChangePassword = (e) => {    
        setPassword(e.target.value);
      };

      const ToggleSwitch = (e) => {
        e.preventDefault(); 
        setIsChecked((prev) => !prev);
    };
    
    const Login = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            rememberMe: isChecked
        }
        console.log(data);
    }

    return(
        <>
        <Row className="gx-1 gy-3">
        <Col className="col-12 col-lg-6  d-flex align-content-center justify-content-center">
        <Image className="image" src="login_pic.svg" fluid/>
        </Col>
        <Col className="col-12 col-lg-6 d-flex align-content-center justify-content-center">
        <Card className="card">
            <Card.Body id="body">
                <Form>
                <Card.Title className="login-title text-center">
                    {t("login.title")}
                </Card.Title>
                <InputWithLabel 
                type="email" 
                label={t("login.email")}
                onChange={ChangeEmail}
                />
                <InputWithLabel 
                type="password" 
                label={t("login.password")}
                onChange={ChangePassword}
                />
                <Row>
                    <Col xs={2}>
                        <Switch
                        checked={isChecked}
                        onClick={ToggleSwitch}
                        />
                    </Col>
                    <Col >
                        <Card.Text>{t("login.toggle")}</Card.Text>
                    </Col>
                </Row>
                <div className="d-grid gap-2 mt-3">
                <Button 
                className="button primary" 
                text={t("login.enter")}
                type="submit"
                onCLick={Login}
                />
                </div>
                </Form>
                
            </Card.Body>
        </Card>
      </Col>
      </Row>
        </>
    );
};

export default loginForm;