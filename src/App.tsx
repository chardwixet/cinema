import './index.scss';
import { Layout } from '@components/share/Layout';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { Router } from './pages/router';
import { setUser } from './store/slices/userSlice';
import { GetProfile } from './api/User';
import { LoginSignUpBox } from './components/share/LoginSignUpBox';
import { useModal } from './hooks/use-modal';

export function App() {
  const [isShowingModal, toggleModal] = useModal('auth');
  const { data, status, error, isFetching } = useQuery({
    queryFn: () => GetProfile(),
    queryKey: ['users', 'profile'],
  });
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (status === 'success' && !isFetching) {
      dispatch(
        setUser({
          email: data.email,
          name: data.name,
          surname: data.surname,
          favorites: data.favorites,
        }),
      );
    }
  }, [data, status, dispatch, error, isFetching]);

  return (
    <Layout>
      <Router />
      <LoginSignUpBox isShowingModal={isShowingModal} onCloseModal={toggleModal} />
    </Layout>
  );
}
