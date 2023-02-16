import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });
  /*alert(JSON.stringify(errors.password?.message))*/
  const onSubmitHandler = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <form className={s.authForm} action={''} onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset className={s.inputBlock__fieldset}>
        <Input
          register={register}
          id={'current-username'}
          name={'username'}
          width={300}
          type={'text'}
          label={'Username'}
          pattern={usernamePattern}
          patternMessage={
            'The username must start with a letter. The username must be more than 3 characters long and less than 20 characters long. '
          }
          errors={errors}
          errMessage={errors.username?.message}
          maxLength={50}
          minLength={3}
        />
        <Input
          register={register}
          id={'current-password'}
          name={'password'}
          width={300}
          type={'password'}
          label={'Password'}
          pattern={passwordPattern}
          patternMessage={
            'The password must contain 8 characters, one upper case, one lower case, one special character, one number.'
          }
          errors={errors}
          errMessage={errors.password?.message}
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
      <Button type={'submit'} buttonType={'default'}>
        LOGIN
      </Button>
    </form>
  );
};

export default AuthForm;
