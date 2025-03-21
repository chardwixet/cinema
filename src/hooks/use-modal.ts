import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toogleAuth, toogleSearch, toogleTrailer } from '@/store/slices/modalSlice';
import { useNoScrollModal } from './use-noScrollModal';

type HowModal = 'auth' | 'trailer' | 'search';

export function useModal(howModal: HowModal = 'auth'): [boolean, () => void] {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  let modalIsOpen;
  let toogle: () => void;

  if (howModal === 'auth') {
    modalIsOpen = modal.isOpenAuth;
    toogle = () => dispatch(toogleAuth());
  } else if (howModal === 'trailer') {
    modalIsOpen = modal.isOpenTrailer;
    toogle = () => dispatch(toogleTrailer());
  } else {
    modalIsOpen = modal.isOpenSearch;
    toogle = () => dispatch(toogleSearch());
  }
  useNoScrollModal(modalIsOpen);

  return [modalIsOpen, toogle];
}
