import { cache } from 'react';

export const getBalance = cache(async ({}: {}) => {
  const response = await fetch('http://localhost:3002/api/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('error.status>>>>>>>>>>>>>', error);
      if (error.status === 401) {
        return {};
      }
    });
  console.log('response', response);
  return response;
});
