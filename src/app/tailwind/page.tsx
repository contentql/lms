'use client';

import { Button } from '@mui/material';
import React, { Fragment } from 'react';

const TailwindPage = () => {
  return (
    <div className='w-screen h-screen'>
      <h1 className='text-3xl font-bold text-red-400 text-center '>
        MUI vs Tailwind CSS
      </h1>
      <div className='flex flex-col w-full h-32 items-center justify-center'>
        <div className='flex gap-2'>
          <Button variant='contained'>MUI Button</Button>
          <button className='bg-slate-900 px-3 rounded-md text-white text-sm font-bold hover:bg-slate-600 transition-all ease-in delay-100'>
            Tailwind Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindPage;
