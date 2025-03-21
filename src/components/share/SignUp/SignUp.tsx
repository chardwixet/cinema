import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@api/queryClient';
import { registerUser, SignUpSchema, SignUpType } from '@api/User';
import { setUser } from '@store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/Input';

import style from './SignUp.module.scss';

interface Props {
  HandleToogle: () => void;
}

export function SignUp({ HandleToogle }: Props) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const registerMutation = useMutation(
    {
      mutationFn: registerUser,
      onSuccess: () => setIsSuccess(true),
    },
    queryClient,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <>
      <span className={style.title}>{isSuccess ? 'Регистрация завершена' : 'Регистрация'}</span>
      {isSuccess ? (
        <span className={style.text}>Используйте вашу электронную почту для входа</span>
      ) : (
        <form
          className={style.content}
          onSubmit={handleSubmit((data) => {
            return registerMutation.mutate(data);
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
              error={errors.name}
              id="name"
              placeholder="Имя"
              type="text"
              register={register('name')}
              svg="people"
            />
            <Input
              error={errors.surname}
              id="surname"
              placeholder="Фамилия"
              type="text"
              register={register('surname')}
              svg="people"
            />
            <Input
              error={errors.password}
              id="password"
              placeholder="Пароль"
              type="password"
              register={register('password')}
              svg="key"
            />
            <Input
              error={errors.confirmPassword}
              id="confirmPassword"
              placeholder="Потвердите пароль"
              type="password"
              register={register('confirmPassword')}
              svg="key"
            />
          </div>

          {registerMutation.error && <span>{registerMutation.error.message}</span>}

          <Button type="submit" isLoading={registerMutation.isPending}>
            Создать аккаунт
          </Button>
        </form>
      )}
      <Button
        type="button"
        variant={isSuccess ? 'primary' : 'none'}
        padding={isSuccess ? 'padding-md' : 'padding-none'}
        onClick={() => {
          HandleToogle();
          if (isSuccess) setIsSuccess(false);
        }}
      >
        {isSuccess ? 'Войти' : 'У меня есть пароль'}
      </Button>
    </>
  );
}
