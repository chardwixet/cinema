import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import Mail from '@assets/svg/mail.svg?react';
import { useNavigate } from 'react-router';
import { queryClient } from '@/api/queryClient';
import { GetLogout } from '@/api/User';
import { removeUser } from '@/store/slices/userSlice';
import { UserInfo } from '@/components/ui/UserInfo';
import { RootState } from '@/store';

import style from './Settings.module.scss';
import { Button } from '@/components/ui/Button';

export function Settings() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const logout = useMutation(
    {
      mutationFn: GetLogout,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'profile'] });
      },
    },
    queryClient,
  );

  return (
    <div className={style.content}>
      <div className={style.infoContent}>
        <UserInfo title="Имя Фамилия" info={`${user.name} ${user.surname}`}>
          {`${user.name[0]}${user.surname[0]}`}
        </UserInfo>
        <UserInfo title="Электронная почта" info={user.email}>
          <Mail />
        </UserInfo>
      </div>

      <Button
        type="button"
        onClick={() => {
          logout.mutate();
          navigate('/');
          dispatch(removeUser());
        }}
      >
        Выйти из аккаунта
      </Button>
    </div>
  );
}
