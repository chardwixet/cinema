import { useSelector } from 'react-redux';
import User from '@assets/svg/user.svg?react';
import { Button } from '@/components/ui/Button';
import { RootState } from '@/store';
import { LinkMenu } from '@/components/ui/LinkMenu';
import { useModal } from '@/hooks/use-modal';

import style from './Authorization.module.scss';

export function Authorization() {
  const [, toggleModal] = useModal('auth');

  const data = useSelector((state: RootState) => state.user);

  return data.email ? (
    <LinkMenu to="/account">
      <User className={style.icon} /> <span className={style.textButton}>{data.name}</span>
    </LinkMenu>
  ) : (
    <div className={style.contentBtn}>
      <Button
        type="button"
        onClick={toggleModal}
        variant="menuNoBorder"
        textSize="text-lg"
        padding="padding-none"
      >
        <User className={style.icon} />
        <span className={style.textButton}>Войти</span>
      </Button>
    </div>
  );
}
