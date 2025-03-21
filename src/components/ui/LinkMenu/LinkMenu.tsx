import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

import style from './LinkMenu.module.scss';

interface Props {
  to: string;
  onClick?: () => void;
  childLink?: boolean;
}

export function LinkMenu({ to, onClick, childLink = false, children }: PropsWithChildren<Props>) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? (!childLink ? style.active : style.activeChild) : style.default
      }
      to={to}
    >
      <button type="button" className={style.btn} onClick={onClick}>
        {children}
      </button>
    </NavLink>
  );
}
