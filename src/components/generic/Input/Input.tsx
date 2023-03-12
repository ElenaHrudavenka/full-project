import React, { useState } from 'react';

import IconEye from '../../../assets/img/eye.svg';
import IconEyeCrossed from '../../../assets/img/eye-crossed.svg';

import s from './Input.module.scss';
import { InputPropsType, InputType } from './Input.type';
import { useFormContext } from 'react-hook-form';

export const Input = ({
  id,
  name,
  width,
  label,
  required = true,
  type = 'text',
  pattern,
  patternMessage,
  maxLength,
  minLength,
  ...rest
}: InputPropsType) => {
  const [valueInputType, setValueInputType] = useState<InputType>(type);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const inputStyle = {
    width: width,
  };
  const methods = useFormContext();
  /*console.dir(methods)*/

  let errMessage;
  /*console.log(methods.watch(name))*/
  console.log(methods.formState.errors[name]?.message);
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
  const onChangeHandler = (e: any) => {
    /*errMessage = methods.formState.errors.name?.message ?? '';*/
  };
  return (
    <div className={s.inputBlock}>
      <input
        {...methods.register(name, {
          required: `This field is required.`,
          maxLength: { value: maxLength, message: `The length of a string must not exceed ${maxLength} characters.` },
          minLength: { value: minLength, message: `String length must not be less than ${minLength} characters.` },
          pattern: { value: new RegExp(pattern), message: patternMessage },
          onChange: onChangeHandler,
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
      <div
        className={methods.formState.errors[name]?.message && s.inputBlock__error}
        data-descriptions={methods.formState.errors[name]?.message}
      ></div>
    </div>
  );
};
