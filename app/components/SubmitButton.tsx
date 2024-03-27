"use client"
import React from 'react';
import {useFormStatus } from "react-dom";

export default function SubmitButton(){
    const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-orange-500 hover:bg-blue-700 disabled:bg-zinc-100 text-white font-bold py-2 px-4 my-4 rounded-full "
    >
      Dodajte Novog Korisnika
    </button>
  );
};

