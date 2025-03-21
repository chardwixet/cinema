import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import { Modal } from '@/components/ui/Modal';

interface Props {
  url: string;
  isShowingModal: boolean;
  onCloseModal: () => void;
}

export function YtPlayer({ url, isShowingModal, onCloseModal }: Props) {
  return (
    <Modal isShowingModal={isShowingModal} onCloseModal={onCloseModal}>
      <ReactPlayer url={url} width="960px" height="540px" playing controls />
    </Modal>
  );
}
