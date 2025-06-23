import { Container } from '@/components/share/Container';
import style from './Loader.module.scss';

export interface ILoaderProps {
  color?: 'blue' | 'white';
}

export function Loader({ color = 'white' }) {
  return (
    <Container>
      <div className={style.loader} data-color={color}>
        <div className={style.loader__segment} />
        <div className={style.loader__segment} />
        <div className={style.loader__segment} />
      </div>
    </Container>
  );
}
