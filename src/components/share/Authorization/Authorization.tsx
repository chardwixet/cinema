import { useSelector } from 'react-redux';
import People from '@assets/svg/people.svg?react';
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
      <People className={style.icon} /> <span className={style.textButton}>{data.name}</span>
    </LinkMenu>
  ) : (
    <Button
      type="button"
      onClick={toggleModal}
      variant="menuNoBorder"
      textSize="text-lg"
      padding="padding-none"
    >
      <People className={style.icon} />
      <span className={style.textButton}>Войти</span>
    </Button>
  );
}
