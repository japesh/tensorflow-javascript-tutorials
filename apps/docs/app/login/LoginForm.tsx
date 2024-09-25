'use client';

import { loginAccount } from '@/services/AuthService';
import { getBalance } from '@/services/Balance';
import { Button, TextInput, useActionState } from '@acme/design-system';
import { useEffect } from 'react';

type Props = {
  profile: { _id?: string };
  // balance: Record<string, string>;
};

export default function LoginForm({ profile }: Props) {
  //   const formAction = () => {};
  const [state, formAction, isPending] = useActionState(loginAccount, {
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      // testing proxy middle ware
      const balance = await getBalance({});
      console.log('balance>>>>>>>', balance);
    };
    fetchData();
  }, []);
  if (profile._id) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-900 dark:text-white">Already Logged in</div>
          <Button>Logout</Button>
        </div>
      </div>
    );
  }
  console.log('profile>>>>>>>>>>', profile);
  // const response = use(profile);
  // console.log('profile response', response);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={formAction}>
              <TextInput
                name={'email'}
                type="email"
                label="Your email"
                placeholder="name@company.com"
                required
              />
              <TextInput
                name={'password'}
                type="password"
                label="Password"
                placeholder="••••••••"
                required
              />
              <Button type="submit">Continue</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
