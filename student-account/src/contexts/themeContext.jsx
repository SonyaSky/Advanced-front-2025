import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const translations = {
    en: {
        title: "Login to your account",
        email: "Email",
        password: "Password",
        toggle: "Remember me",
        enter: "Login"
    },
    ru: {
        title: "Вход в аккаунт",
        email: "Электронная почта",
        password: "Пароль",
        toggle: "Запомнить меня",
        enter: "ВОЙТИ"
    }
};
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        backgroundColor: '#eeeeee',
    });
    const [language, setLanguage] = useState('ru');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'ru' ? 'en' : 'ru'));
    };

    const currentTranslations = translations[language];

    return (
        <ThemeContext.Provider value={{ theme, toggleLanguage, currentTranslations }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);