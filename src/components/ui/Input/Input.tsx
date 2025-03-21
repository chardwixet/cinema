/* eslint-disable react/jsx-props-no-spreading */
import People from '@assets/svg/people.svg?react';
import Mail from '@assets/svg/mail.svg?react';
import Key from '@assets/svg/key.svg?react';

import { UseFormRegisterReturn } from 'react-hook-form';
import style from './Input.module.scss';

export interface Props {
  type: string;
  register: UseFormRegisterReturn;
  id: string;
  placeholder: string;
  error: any;
  svg: 'people' | 'mail' | 'key';
}

export function Input({ type, register, svg, id, placeholder, error }: Props) {
  return (
    <label htmlFor={id} className={`${style.label} ${error && style.error}`}>
      {svg === 'people' && <People className={style.svg} />}
      {svg === 'mail' && <Mail className={style.svg} />}
      {svg === 'key' && <Key className={style.svg} />}
      <input id={id} type={type} {...register} placeholder={placeholder} className={style.input} />
    </label>
  );
}
