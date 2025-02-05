"use client"

import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
 const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form 
    className='max-w-xl space-y-3'
     onSubmit={handleSubmit(async (data)=> {
      await axios.post('/api/issues', data);
      router.push('/issues');
      })}>
      <h1 className='text-center font-bold'>Submit New Issue</h1>
      <TextField.Root placeholder='Title' {...register('title')}></TextField.Root>
      <Controller 
      name="description"
      control={control}
      render={({ field })=><SimpleMDE placeholder='Description'{...field} />}
       />
      <Button>Submit</Button>
    </form>
  )
}

export default NewIssuePage
