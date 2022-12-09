import React from 'react';
import {LoginFormContainer} from "../loginForm/LoginFormContainer";

export const Layout = () => {
    return (
        <>
            <header></header>
            <main>
                <span>LOGIN</span>
                <LoginFormContainer />
            </main>
            <footer></footer>
        </>
    );
};
