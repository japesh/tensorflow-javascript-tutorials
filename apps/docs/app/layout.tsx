import { Layout } from '@acme/design-system';
import Navbar from '@acme/pages/components/navbar';
import { ReactNode } from 'react';

import './globals.css';
import LoginButton from '@/components/LoginButton';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Navbar isDocsApp />
        <div className="p-4 pb-0 sm:ml-64 justify-end flex">
          <LoginButton />
        </div>
        <Layout title="micro frontend">{children}</Layout>
      </body>
    </html>
  );
}
