'use client';

import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormProvider, { RHFTextField } from 'src/components/hook-form';

const ReactHookFormTest = () => {
  const defaultValues = {
    name: '',
    age: 0,
  };

  const methods = useForm({
    //  resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    reset();
  });

  return (
    <FormProvider onSubmit={onSubmit} methods={methods}>
      <div className='w-screen mx-auto'>
        <div className='w-96 flex flex-col gap-8'>
          <RHFTextField name='name' label='full name' />

          <RHFTextField name='age' label='Age' type='number' />

          <div className=' flex flex-row-reverse'>
            <LoadingButton
              color='inherit'
              type='submit'
              variant='contained'
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default ReactHookFormTest;
