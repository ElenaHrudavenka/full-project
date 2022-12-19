import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputType = 'text' | 'password';

export type InputPropsType = DefaultInputPropsType & {
    id: string;
    name: string;
    label?: string;
    type?: InputType;
    width?: number;
    required?: boolean;
};