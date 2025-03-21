import { MouseEventHandler, PropsWithChildren } from 'react';
import style from './Button.module.scss';
import { Loader } from '../Loader';

interface Props {
  type: 'button' | 'submit';
  textSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-none';
  variant?: 'primary' | 'secondary' | 'icon' | 'menu' | 'menuNoBorder' | 'none';
  padding?: 'padding-md' | 'padding-lg' | 'padding-none' | 'padding-icon';
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  type,
  children,
  textSize = 'text-md',
  variant = 'primary',
  padding = 'padding-md',
  isLoading,
  isDisabled,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style[textSize]} ${style[padding]} ${style[variant]}`}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <Loader color="white" /> : children}
    </button>
  );
}
