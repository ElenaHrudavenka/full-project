import React from 'react';
import { AuthFormContainer } from '../AuthForm/AuthFormContainer';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header></header>
      <main className={s.mainBlock}>
        <span>LOGIN</span>
        <AuthFormContainer />
      </main>
      <footer className={s.footerBlock}>
        <span>There will be a description.</span>
      </footer>
    </>
  );
};
