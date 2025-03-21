import Ex from '@assets/svg/ex.svg?react';
import style from './ButtonEx.module.scss';

interface Props {
  positionFor: 'modal' | 'card';
  onClick: () => void;
}

export function ButtonEx({ positionFor, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={`${style.btn} ${style[positionFor]}`}>
      <Ex />
    </button>
  );
}
