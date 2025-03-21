/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import ReactDOM from 'react-dom';
import { Children, PropsWithChildren, useEffect, useRef } from 'react';
import Ex from '@assets/svg/ex.svg?react';
import style from './Modal.module.scss';
import { ButtonEx } from '../ButtonEx';

export interface Props {
  isShowingModal: boolean;
  rounded?: boolean;
  btnEx?: boolean;
  position?: 'top' | 'middle';
  onCloseModal: () => void;
}

export function Modal({
  isShowingModal,
  rounded,
  onCloseModal,
  children,
  btnEx = true,
  position = 'middle',
}: PropsWithChildren & Props) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isShowingModal && dialogRef.current) {
      dialogRef.current.focus(); // Устанавливаем фокус на модальное окно
    }
  }, [isShowingModal]);

  if (!isShowingModal) return null;

  return ReactDOM.createPortal(
    <dialog
      className={`${style.modalWrapper} ${style[position]}`}
      onClick={onCloseModal}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onCloseModal();
        }
      }}
      ref={dialogRef}
      aria-labelledby="dialog-name"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${style.modal} ${rounded && style.rounded}`}
      >
        {children}
        {btnEx && <ButtonEx onClick={onCloseModal} positionFor="modal" />}
      </div>
    </dialog>,

    document.body,
  );
}
