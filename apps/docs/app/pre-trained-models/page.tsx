'use client';

import { Text } from '@vercel/examples-ui';
import Script from 'next/script';

type Props = {};

export default function PreTrainedModels({}: Props) {
  // useEffect(() => {
  //   var searchText = 'We believe cats are the real stars of YouTube.'
  //   var question = 'What is important to YouTube?'
  //   try{
  //     window.qna.load().then((model: any) => {
  //       model.findAnswers(question, searchText).then((answers: any) => {
  //         console.log('Answers: ', answers) // Cats!
  //       })
  //     })
  //   }catch(error){
  //     console.log("error", error)
  //   }

  // }, [])
  return (
    <Text variant="h1" className="mb-6">
      About Docs
      <Script
        src="https://cdn.jsdelivr.net/npm/@tensorflow-models/qna"
        onLoad={() => {
          // window.tf = tf;
          try {
            const searchText = 'We believe cats are the real stars of YouTube.';
            const question = 'What is important to YouTube?';
            window.qna.load().then((model: any) => {
              model.findAnswers(question, searchText).then((answers: any) => {
                console.log('Answers: ', answers); // Cats!
              });
            });
          } catch (error) {
            console.log('error', error);
          }
        }}
      />
      {/* <Script>
        {`
          `}
      </Script> */}
      <pre className="mb-4 text-base">{`
        <Script
        src="https://cdn.jsdelivr.net/npm/@tensorflow-models/qna"
        onLoad={() => {
          try {
            const searchText = 'We believe cats are the real stars of YouTube.'
            const question = 'What is important to YouTube?'
            window.qna.load().then((model: any) => {
              model.findAnswers(question, searchText).then((answers: any) => {
                console.log('Answers: ', answers) // Cats!
              })
            })
          } catch (error) {
            console.log('error', error)
          }
        }}
      />
      
      `}</pre>
    </Text>
  );
}
