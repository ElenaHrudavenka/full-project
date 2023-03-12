import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ValidationRule } from 'react-hook-form';

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputType = 'text' | 'password';

export type InputPropsType = DefaultInputPropsType & {
  /*register: UseFormRegister<any>;*/
  id: string;
  name: string;
  pattern: string;
  patternMessage: string;
  label?: string;
  type?: InputType;
  width?: number;
  required?: string | ValidationRule<boolean>;
  errors?: any;
  errMessage?: string;
  maxLength: number;
  minLength: number;
};
