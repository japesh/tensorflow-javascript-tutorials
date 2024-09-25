'use client';

import { useState, FormEventHandler } from 'react';

export default function useActionState<Tstate>(
  action: (currentState: Tstate, formData: FormData) => Tstate,
  initialState: Tstate
) {
  const [state, setState] = useState(initialState);
  const [isPending, setIsPending] = useState(false);

  const formAction: FormEventHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsPending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    console.log("formData>>>>>>>>", formData.get("email"))
    try {
      const result = await action(state, formData);
      setState(result);
    } finally {
      setIsPending(false);
    }
  };

  return [state, formAction, isPending];
}
