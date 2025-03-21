import './Loader.css';

export interface ILoaderProps {
  color?: 'blue' | 'white';
}

export function Loader({ color = 'white' }) {
  return (
    <div className="loader" data-color={color}>
      <div className="loader__segment" />
      <div className="loader__segment" />
      <div className="loader__segment" />
    </div>
  );
}
