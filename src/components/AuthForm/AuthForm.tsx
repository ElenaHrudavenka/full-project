import React from 'react';
import { useState } from 'react';
import s from "./AuthForm.module.scss";
import {Input} from "../generic/Input/Input";
import {Button} from "../generic/Button/Button";

const AuthForm = () => {
    const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);
    const onChangeRememberMe = () => {
        setIsCheckedRememberMe(!isCheckedRememberMe);
    }
    
    return (
        <form className={s.authForm} action={''}>
            <fieldset className={s.inputBlock__fieldset}>
                <Input
                    id={'current-username'}
                    name={'username'}
                    width={300}
                    type={'text'}
                    label={'Username'}
                    pattern={'^[a-zA-z]{1}[a-zA-Z1-9@.]{3,20}$'}
                    title={'The username must start with a letter. The username must be more than 3 characters long and less than 20 characters long. '}
                />
                <Input
                    id={'current-password'}
                    name={'password'}
                    width={300}
                    type={'password'}
                    label={'Password'}
                    pattern={'(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'}
                    title={'The password must contain 8 characters, one upper case, one lower case, one special character, one number.'}
                />
            </fieldset>
            <fieldset className={s.authFooterBlock_fieldset}>
                <fieldset className={s.rememberMeBlock_fieldset}>
                    <input id={'checkBoxRememberMe'} type={'checkbox'} checked={isCheckedRememberMe} onChange={onChangeRememberMe} />
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

export default AuthForm;