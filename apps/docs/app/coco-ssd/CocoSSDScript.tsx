'use client';

import { useEffect, useRef, useState } from 'react';

import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';


type Props = {};

export default function CocoSSDScript({}: Props) {
  const [model, setModel] = useState<ReturnType<typeof cocoSsd.load>>();

  useEffect(() => {
    let stream;

    // Set up the webcam video stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((mediaStream) => {
          stream = mediaStream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        });
    }
    return () => {
      // Cleanup function to stop the stream when the component unmounts
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      // setVideoStreamEnabled(false);
      console.log('Stream stopped and component unmounted.');
    };
  }, []);

  // handling coco ssd
  useEffect(() => {
    cocoSsd?.load().then(function (loadedModel: any) {
      setModel(loadedModel);
    });
  }, []);

  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>();

  const detectPrediction = () => {
    try {
      if (videoRef.current) {
        if (videoRef.current.readyState === 4) {
          model
            ?.detect(videoRef.current)
            .then((predictions) => {
              drawBoundingBoxes(predictions);
            })
            .catch((error) => {
              console.log('error', error);
            });
        } else {
          setTimeout(() => {
            detectPrediction();
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (model) {
      detectPrediction();
    }
  }, [model]);

  const drawBoundingBoxes = (predictions) => {
    try {
      if(canvasRef.current){
        const ctx = canvasRef.current.getContext('2d');
       if(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        predictions.forEach((prediction) => {
          console.log('prediction', prediction);
          ctx.beginPath();
          ctx.rect(...prediction.bbox);
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.stroke();
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            prediction.bbox[0],
            prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
          );
        });
       }
      }
    } catch (error) {
      console.log('error', error);
    }

    setTimeout(() => {
      detectPrediction();
    }, 1000);
  };

  return (
    <section id="demos" className="transition-opacity">
      <p className="text-lg my-3">
        Hold some objects up close to your webcam to get a real-time
        classification! When ready click &quot;enable webcam&quot; below and
        accept access to the webcam when the browser asks (check the top left of
        your window)
      </p>

      <span className="my-3 text-lg">
        Tenserflow Version: {tf?.version.tfjs}
        <br />
        CocoSsd Version: {cocoSsd?.version}
      </span>
      <div className="relative">
        <video ref={videoRef} width="700" height="525" className="block" />
        <canvas
          ref={canvasRef}
          width={'700'}
          height={'525'}
          className="absolute top-0 bottom-0 block "
        />
      </div>
    </section>
  );
}
