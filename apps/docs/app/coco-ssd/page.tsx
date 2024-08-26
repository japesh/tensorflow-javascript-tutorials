'use client'

import { Suspense } from 'react'
import CocoSSDScript from './CocoSSDScript'

// export const metadata: Metadata = {
//   title: 'coco ssd',
// }

export default function About() {
  // const onLoad = () => {
  //   console.log('loaded successfully')
  // }
  return (
    <>
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"
        type='text/script'
      /> */}
      <h1 className='text-amber-500 text-3xl'>
        Multiple object detection using pre trained model in TensorFlow.js
      </h1>

      <p className='my-3 text-lg'>
        Wait for the model to load before clicking the button to enable the
        webcam - at which point it will become visible to use.
      </p>

      
      <CocoSSDScript />

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"
        type="text/javascript"
        onLoad={onLoad}
      /> */}
      {/* <Text variant="h1" className="mb-6">
        About Docs
      </Text>
      <Text className="mb-4">
        This is the about page in the docs app (
        <Code>apps/docs/pages/about.tsx</Code>).
      </Text>
      <Text>
        Navigations between <Link href="/">Docs</Link> and{' '}
        <Link href="/about">About Docs</Link> are client-side transitions
        because they&apos;re part of the same Next.js app. Navigating to{' '}
        <a
          className="text-link hover:text-link-light transition-colors"
          href="/"
        >
          Home (Multi Zones)
        </a>{' '}
        requires a page refresh because it lives in a different Next.js app.
      </Text> */}
    </>
  )
}
