import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import s from './AuthForm.module.scss';
import { Input } from '../generic/Input/Input';
import { Button } from '../generic/Button/Button';

type AuthFormPropsType = {
  isCheckedRememberMe: boolean;
  onChangeRememberMe: () => void;
};
type FormValues = {
  username: string;
  password: string;
};

const AuthForm: FC<AuthFormPropsType> = ({ isCheckedRememberMe, onChangeRememberMe }) => {
  const usernamePattern = '^[a-zA-z]{1}[a-zA-Z1-9@.]';
  const passwordPattern = '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]';
  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmitHandler = (data: any) => {
    alert(JSON.stringify(data));
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form className={s.authForm} action={''} onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <fieldset className={s.inputBlock__fieldset}>
          <Input
            id={'current-username'}
            name={'username'}
            width={300}
            type={'text'}
            label={'Username'}
            pattern={usernamePattern}
            patternMessage={
              'The username must start with a letter. The username must be more than 3 characters long and less than 20 characters long. '
            }
            maxLength={50}
            minLength={3}
          />
          <Input
            id={'current-password'}
            name={'password'}
            width={300}
            type={'password'}
            label={'Password'}
            pattern={passwordPattern}
            patternMessage={
              'The password must contain 8 characters, one upper case, one lower case, one special character, one number.'
            }
            maxLength={100}
            minLength={8}
          />
        </fieldset>
        <fieldset className={s.authFooterBlock_fieldset}>
          <fieldset className={s.rememberMeBlock_fieldset}>
            <input
              id={'checkBoxRememberMe'}
              type={'checkbox'}
              checked={isCheckedRememberMe}
              onChange={onChangeRememberMe}
            />
            <label htmlFor='checkBoxRememberMe'>Remember me</label>
          </fieldset>
          <a href=''>Forgot?</a>
        </fieldset>
        <Button type={'submit'}>LOGIN</Button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
