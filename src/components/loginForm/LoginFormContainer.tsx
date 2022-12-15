import React from 'react';
import { InputContainer } from '../Input/InputContainer';
import s from './LoginFormContainer.module.scss';
import { Button } from '../Button/Button';

export const LoginFormContainer = () => {

  return (
    <form className={s.authForm} action={''}>
      <fieldset className={s.inputBlock__fieldset}>
        <InputContainer
          id={'current-username'}
          name={'username'}
          width={300}
          type={'text'}
          label={'Username'}
        />
        <InputContainer
          id={'current-password'}
          name={'password'}
          width={300}
          type={'password'}
          label={'Password'}
        />
      </fieldset>
      <fieldset className={s.authFooterBlock_fieldset}>
        <fieldset className={s.rememberMeBlock_fieldset}>
          {/* <legend>'Select the 'Remember me' check box'</legend>*/}
          <input id={'checkBoxRememberMe'} type={'checkbox'} checked={true} onChange={() => {}} />
          <label htmlFor='checkBoxRememberMe'>Remember me</label>
        </fieldset>
        <a href=''>Forgot?</a>
      </fieldset>
      <Button width={300} type={'submit'} buttonType={'default'}>
        LOGIN
      </Button>
    </form>
  );
};
