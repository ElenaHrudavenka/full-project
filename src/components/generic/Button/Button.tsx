import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  buttonType?: 'default' | 'disabled' | 'error';
  width?: number;
  disabled?: boolean;
};

export const Button = ({ buttonType = 'default', width, ...rest }: ButtonPropsType) => {
  let designButton;
  let disabled = false;
  switch (buttonType) {
    case 'disabled':
      designButton = s.disabled;
      disabled = true;
      break;
    case 'error':
      designButton = s.error;
      break;
    default:
      designButton = s.default;
  }
  const buttonBlock = `${s.button} ${designButton}`;

  return <button className={buttonBlock} style={{ width: width ?? '100%' }} disabled={disabled} {...rest} />;
};
