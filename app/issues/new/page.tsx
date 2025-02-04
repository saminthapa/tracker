import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <h1 className='text-center font-bold'>Submit New Issue</h1>
      <TextField.Root placeholder='Title'></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage
