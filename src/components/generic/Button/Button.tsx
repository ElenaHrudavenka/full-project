import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './Button.module.scss';
import { useFormContext } from 'react-hook-form';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  width?: number;
  disabled?: boolean;
};

export const Button = ({ width, ...rest }: ButtonPropsType) => {
  const {
    formState: { isValid },
  } = useFormContext();

  return <button className={s.button} style={{ width: width ?? '100%' }} disabled={!isValid} {...rest} />;
};
