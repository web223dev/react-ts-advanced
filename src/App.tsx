// import { useRef } from 'react';
// import Container from './components/Container';
import Button from './components/Button';
import Input from './components/input';
import Form, { FormHandle } from './components/Form';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);
  // const input = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id='name' label='Your name' type='text' />
        <Input id='age' label='Your age' type='number' />
        {/* <Input id='name' label='Your name' type='text' ref={input} /> */}
        <p>
          <Button>Save</Button>
        </p>
        {/* <p>
          <Button href='https://google.com'>A Link</Button>
        </p>
        <Container as={Button} type='button'>
          Click Me
        </Container> */}
      </Form>
    </main>
  );
}

export default App;
