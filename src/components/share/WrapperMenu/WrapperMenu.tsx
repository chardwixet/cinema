import SearchSvg from '@assets/svg/search-icon.svg?react';
import { Modal } from '@/components/ui/Modal';
import { Navbar } from '../Navbar';
import { Search } from '../Search';
import { useModal } from '@/hooks/use-modal';

import style from './WrapperMenu.module.scss';

export function WrapperMenu() {
  const [isOpenSearch, toogleSearch] = useModal('search');

  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.input}>
        <Search />
      </div>
      <div className={style.inputBtn}>
        <button type="button" className={style.btn} onClick={toogleSearch}>
          <SearchSvg className={style.icon} />
        </button>
      </div>

      <Modal isShowingModal={isOpenSearch} onCloseModal={toogleSearch} btnEx={false} position="top">
        <Search />
      </Modal>
    </div>
  );
}
