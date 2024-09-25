import { getAccount, registerAccount } from '@/services/AuthService';
import { Button, TextInput, useActionState } from '@acme/design-system';
import React from 'react';
import SignupForm from './SignupForm';
import { cookies } from 'next/headers';

type Props = {};

export default async function Signup({}: Props) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  // ideal place will be client for this call it has been used like this for experiment
  const res = await getAccount({
    cookie: {
      token: token?.value || '',
    },
  });
  return <SignupForm profile={res} />;
}
