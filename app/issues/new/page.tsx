"use client"

import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <h1 className='text-center font-bold'>Submit New Issue</h1>
      <TextField.Root placeholder='Title'></TextField.Root>
      <SimpleMDE placeholder='Description'/>
      <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage
