import { validateResponse } from '@/helpers/validateResponse';
import { LoginType, SignUpType, User, UserSchema } from './type';

export async function registerUser({ email, name, surname, password }: SignUpType): Promise<void> {
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, surname, password }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export async function loginUser({ email, password }: LoginType): Promise<void> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  await validateResponse(response);
}

export async function GetProfile(): Promise<User> {
  const response = await fetch(`/api/profile`);
  const data = await response.json();
  return UserSchema.parse(data);
}

export async function GetLogout(): Promise<void> {
  await fetch(`/api/auth/logout`);
}
