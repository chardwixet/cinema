import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

import style from './LinkMenu.module.scss';

interface Props {
  to: string;
  onClick?: () => void;
  childLink?: boolean;
}

export function LinkMenu({ to, onClick, childLink = false, children }: PropsWithChildren<Props>) {
  function getLinkClass(isActive: boolean) {
    if (isActive) {
      return childLink ? style.activeChild : style.active;
    }
    return style.default;
  }

  return (
    <NavLink className={({ isActive }) => getLinkClass(isActive)} to={to}>
      <button type="button" className={style.btn} onClick={onClick}>
        {children}
      </button>
    </NavLink>
  );
}
