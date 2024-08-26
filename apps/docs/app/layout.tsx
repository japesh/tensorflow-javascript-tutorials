import { Layout } from '@acme/design-system';
import Navbar from '@acme/pages/components/navbar';
import { ReactNode } from 'react';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Navbar isDocsApp />
        <Layout title="micro frontend">{children}</Layout>
      </body>
    </html>
  );
}
