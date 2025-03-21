import { Navigate, Route, Routes } from 'react-router';

import { useSelector } from 'react-redux';
import { pagesData, pagesMenuData, RouterType } from './pageData';

import { FavoritesPage } from './FavoritesPage';
import { AccountPage } from './AccountPage';
import { SettingsPage } from './SettingsPage';
import { RootState } from '@/store';

function route(pages: RouterType[]) {
  return pages.map(({ path, title, element, child }: RouterType) => {
    return (
      <Route key={title} path={path} element={element}>
        {child && route(child)}
      </Route>
    );
  });
}

export function Router() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Routes>
      {route(pagesMenuData)}
      {route(pagesData)}
      <Route path="account" element={user.email ? <AccountPage /> : <Navigate to="/" replace />}>
        <Route index element={<Navigate to="/account/favorites" replace />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
