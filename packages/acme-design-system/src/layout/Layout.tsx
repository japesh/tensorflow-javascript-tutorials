import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

const Layout = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <div className="p-4 sm:ml-64">
      <Head>{title}</Head>
      <div className="overflow-hidden p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {children}
      </div>
    </div>
  )
}
export default Layout
