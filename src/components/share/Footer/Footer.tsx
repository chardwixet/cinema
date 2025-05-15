import Vk from '@assets/svg/vk.svg?react';
import Youtube from '@assets/svg/youtube.svg?react';
import Ok from '@assets/svg/ok.svg?react';
import Tg from '@assets/svg/tg.svg?react';

import style from './Footer.module.scss';
import { Container } from '../Container';

interface Link {
  icon: JSX.Element;
  link: string;
}

const LINKS: Link[] = [
  {
    icon: <Vk />,
    link: '',
  },
  {
    icon: <Youtube />,
    link: '',
  },
  {
    icon: <Ok />,
    link: '',
  },
  {
    icon: <Tg />,
    link: '',
  },
];

export function Footer() {
  return (
    <Container>
      <div className={style.content}>
        <ul className={style.list}>
          {LINKS.map((item) => (
            <li key={crypto.randomUUID()} className={style.item}>
              <a className={style.link} href={item.link}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
