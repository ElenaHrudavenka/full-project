import React, { useState } from 'react';

import IconEye from '../../../assets/img/eye.svg';
import IconEyeCrossed from '../../../assets/img/eye-crossed.svg';

import s from './Input.module.scss';
import { InputPropsType, InputType } from './Input.type';

export const Input = ({
  register,
  id,
  name,
  width,
  label,
  required = true,
  type = 'text',
  pattern,
  patternMessage,
  errors,
  errMessage,
  maxLength,
  minLength,
  ...rest
}: InputPropsType) => {
  const [valueInputType, setValueInputType] = useState<InputType>(type);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const inputStyle = {
    width: width,
  };
  // изменение иконки при скрытом вводе пароля
  const onClickSwitchIcon = () => {
    if (valueInputType === 'password') {
      setValueInputType('text');
      setIsPassword(true);
    } else {
      setValueInputType('password');
      setIsPassword(false);
    }
  };
  return (
    <div className={s.inputBlock}>
      <input
        {...register(name, {
          required: required,
          maxLength: { value: maxLength, message: `The length of a string must not exceed ${maxLength} characters.` },
          minLength: { value: minLength, message: `String length must not be less than ${minLength} characters.` },
          pattern: { value: new RegExp(pattern), message: patternMessage },
        })}
        type={valueInputType}
        style={inputStyle}
        {...rest}
      />

      <span className={s.inputBlock__bar}></span>
      <label>{label}</label>
      {type === 'password' && (
        <div className={s.inputBlock__icon} onClick={onClickSwitchIcon}>
          {isPassword ? <img src={IconEye} alt='eye icon' /> : <img src={IconEyeCrossed} alt='crossed-out eye icon' />}
        </div>
      )}
      <div className={errMessage && s.inputBlock__error} data-descriptions={errMessage}></div>
    </div>
  );
};
