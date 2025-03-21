import { useEffect } from 'react';

export default function useClickOutside(
  menuRef: React.MutableRefObject<HTMLInputElement | null>,
  addRef: React.MutableRefObject<HTMLInputElement>,
  cb: () => void,
) {
  const handleClick = (e) => {
    if (
      !addRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
}
