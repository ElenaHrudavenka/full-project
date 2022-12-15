import React from 'react';
import { LoginFormContainer } from '../loginForm/LoginFormContainer';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header></header>
      <main className={s.mainBlock}>
        <span>LOGIN</span>
        <LoginFormContainer />
      </main>
      <footer className={s.footerBlock}>
        <span>There will be a description.</span>
      </footer>
    </>
  );
};
