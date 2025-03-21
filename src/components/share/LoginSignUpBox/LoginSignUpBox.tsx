/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useEffect, useState } from 'react';
import Logo from '@assets/svg/logo.svg?react';
import { Login } from '@/components/share/Login';

import { SignUp } from '@/components/share/SignUp';
import style from './LoginSignUpBox.module.scss';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export interface Props {
  isShowingModal: boolean;
  onCloseModal: () => void;
}

export function LoginSignUpBox({ isShowingModal, onCloseModal }: Props) {
  const [login, setLogin] = useState(true);

  const HandleToogle = () => {
    setLogin(!login);
  };

  useEffect(() => {
    if (!isShowingModal) setLogin(true);
  }, [isShowingModal]);

  return (
    <Modal isShowingModal={isShowingModal} rounded onCloseModal={onCloseModal}>
      <div className={style.content}>
        {login === true ? (
          <Login HandleToogle={HandleToogle} onCloseModal={onCloseModal} />
        ) : (
          <SignUp HandleToogle={HandleToogle} />
        )}
      </div>
    </Modal>
  );
}
