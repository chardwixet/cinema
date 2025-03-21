import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@components/ui/Button';
import { setUser } from '@store/slices/userSlice';
import style from './Form.module.scss';

export function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const some = handleClick(email, pass);

    some.mutation();

    dispatch(
      setUser({
        email,
        token: crypto.randomUUID(),
      }),
    );
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button type="submit" isLoading={handleClick.isPending}>
        Войти
      </Button>
    </form>
  );
}
