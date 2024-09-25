// import { cookies } from 'next/headers';
import { cookies } from 'next/headers';
import { cache } from 'react';

export async function registerAccount(currentState: any, formData: FormData) {
  // ...
  const response = await fetch('http://localhost:3002/api/register', {
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((res) => res.json());
  console.log('response', response);
  return {
    email: formData.get('email'),
    password: formData.get('password'),
  };
}

export async function loginAccount(currentState: any, formData: FormData) {
  // ...
  const response = await fetch('http://localhost:3002/api/login', {
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST',
  }).then((res) => res.json());

  return {
    email: formData.get('email'),
    password: formData.get('password'),
  };
}

export const getAccount = cache(
  async ({ cookie }: { cookie: Record<string, string> }) => {
    const response = await fetch('http://localhost:3002/api/profile', {
      headers: {
        Cookie: cookie && `token=${cookie.token}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => res.json());
    // .catch((error) => {
    //   console.log('error.status>>>>>>>>>>>>>', error.status);
    //   if (error.status === 401) {
    //     return {};
    //   }
    // });

    return response;
  }
);

export const logout = async () => {
  // const cookieStore = cookies();
  // const token = cookieStore.get('token');
  return fetch('http://localhost:3002/api/logout', {
    // headers: {
    //   // Cookie: `token=${token}`,
    //   'Content-Type': 'application/json',
    // },
    method: 'POST',
    credentials: 'include',
  });
};
