import { getAccount } from '@/services/AuthService';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import LoginForm from './LoginForm';
// import { cookies } from 'next/headers';

type Props = {};

export default async function Login({}: Props) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  // if (token) {
  //   cookies().set({
  //     name: 'token',
  //     value: token.value,
  //     httpOnly: true,
  //     // path: '/',
  //   })
  // }
  // ideal place will be client for this call it has been used like this for experiment
  const res = await getAccount({
    cookie: {
      token: token?.value || '',
    },
  });
  // console.log('res>>>>>>>>>>', res);
  return (
    <Suspense fallback="Loading....">
      <LoginForm profile={res} />
    </Suspense>
  );
}
