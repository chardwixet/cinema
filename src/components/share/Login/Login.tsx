import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@api/queryClient';
import { LoginSchema, loginUser } from '@api/User';
import { Button } from '@components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';

import style from './Login.module.scss';

interface Props {
  HandleToogle: () => void;
  onCloseModal: () => void;
}

export function Login({ HandleToogle, onCloseModal }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const loginMutation = useMutation(
    {
      mutationFn: loginUser,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['users', 'profile'] });
        onCloseModal();
      },
    },
    queryClient,
  );

  return (
    <>
      <form
        className={style.content}
        onSubmit={handleSubmit((data) => {
          loginMutation.mutate(data);
        })}
      >
        <div className={style.inputs}>
          <Input
            id="email"
            placeholder="Электронная почта"
            error={errors.email}
            type="email"
            register={register('email')}
            svg="mail"
          />
          <Input
            id="password"
            placeholder="Пароль"
            error={errors.password}
            type="password"
            register={register('password')}
            svg="key"
          />
        </div>

        <Button type="submit" isLoading={loginMutation.isPending}>
          Войти
        </Button>
      </form>
      <Button type="button" variant="none" padding="padding-none" onClick={HandleToogle}>
        Регистрация
      </Button>
    </>
  );
}
