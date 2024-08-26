import type { AppProps } from 'next/app'
// import type { LayoutProps } from '@vercel/examples-ui/layout'
// import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { Layout } from '@acme/design-system'
import Navbar from '@acme/pages/components/navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      title="Microfrontends"
      // path="solutions/microfrontends"
      // deployButton={{
      //   repositoryUrl:
      //     'https://github.com/vercel/examples/tree/main/solutions/microfrontends',
      // }}
    >
      <Navbar isDocsApp />
      <Component {...pageProps} />
    </Layout>
  )
}
