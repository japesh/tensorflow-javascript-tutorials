import { getAccount } from '@/services/AuthService';
import Button from '@acme/design-system/button';
import { cookies } from 'next/headers';

import React from 'react';
import LogoutButton from './LogoutButton';

type Props = {};




export default async function LoginButton({}: Props) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  // ideal place will be client for this call it has been used like this for experiment
  const profile = await getAccount({
    cookie: {
      token: token?.value || '',
    },
  });

  if (profile._id) {
    return <LogoutButton />;
  }
  return (
    <Button href="/login" className="w-28">
      Login
    </Button>
  );
}
