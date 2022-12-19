import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

import IconEye from '../../../assets/img/eye.svg';
import IconEyeCrossed from '../../../assets/img/eye-crossed.svg';

import s from './Input.module.scss';
import {InputPropsType, InputType} from "./Input.type";

export const Input = ({ id, name, width, label, required = true, type = 'text', ...rest }: InputPropsType) => {
  const [value, setValue] = useState<InputType>(type);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const inputStyle = {
    width: width,
  };
  // изменение иконки при скрытом вводе пароля
  const onClickSwitchIcon = () => {
    if (value === 'password') {
      setValue('text');
      setIsPassword(true);
    } else {
      setValue('password');
      setIsPassword(false);
    }
  };
  return (
    <div className={s.inputBlock}>
      <input type={value} style={inputStyle} required={required} {...rest} />
      <span className={s.inputBlock__bar}></span>
      <label>{label}</label>
      {type === 'password' && (
        <div className={s.inputBlock__icon} onClick={onClickSwitchIcon}>
          {isPassword ? <img src={IconEye} alt='eye icon' /> : <img src={IconEyeCrossed} alt='crossed-out eye icon' />}
        </div>
      )}
    </div>
  );
};
