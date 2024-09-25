'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import * as tf from '@tensorflow/tfjs';

const MODEL_PATH =
  'https://storage.googleapis.com/jmstore/TensorFlowJS/EdX/SavedModels/sqftToPropertyPrice/model.json';

const LOCAL_MODEL_PATH = 'localstorage://demo/sqftToPropertyPrice';
type Props = {};

export default function SquareFitProperty({}: Props) {
  const [model, setModel] = useState<ReturnType<any>>();

  // handling coco ssd
  useEffect(() => {
    let _model: any;
    async function loadModel() {
      console.log('loading model');
      const modelsMap = await tf.io.listModels();
      if (modelsMap?.[LOCAL_MODEL_PATH]) {
        console.log('111 Loading locally');
        _model = await tf.loadLayersModel(LOCAL_MODEL_PATH);
      } else {
        console.log('111 Loading server');
        _model = await tf.loadLayersModel(MODEL_PATH);
      }

      console.log('model fetched', _model);
      _model.summary();

      const input = tf.tensor2d([[870]]);
      const inputBatch = tf.tensor2d([[500], [1100], [970]]);
      const result = _model.predict(input);
      const resultBatch = _model.predict(inputBatch);
      result.print();
      resultBatch.print();
      // dispose result
      input.dispose();
      inputBatch.dispose();
      result.dispose();
      resultBatch.dispose();

      _model.save(LOCAL_MODEL_PATH);

      setModel(_model);
    }
    loadModel();
    return () => {
      // console.log('_model>>>>>>>>.', _model, model);
      if (_model) {
        _model.dispose();
      }
    };
  }, []);

  // console.log('model', model);
  if (!model) {
    return <div>Loading....</div>;
  }

  return (
    <section id="demos" className="transition-opacity">
      <div className="relative">SquareFitProperty</div>
    </section>
  );
}
