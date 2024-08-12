import { useRef } from 'react';
import Form, { FormHandle } from './UI/Form';
import Button from './UI/Button';
import Input from './UI/input';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: number };
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id='add-timer'>
      <Input type='text' label='Name' id='name' />
      <Input type='number' label='Duration' id='duration' />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
