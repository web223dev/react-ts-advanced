import { useRef } from 'react';
// import Button from './components/Button';
// import Container from './components/Container';
import Input from './components/input';
// import Input from './components/input';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id='name' label='Your name' type='text' ref={input} />
      <Input id='age' label='Your age' type='number' />
      {/* <p> 
        <Button target=''>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p> */}
      {/* <Container as={Button} type='button'>
        Click Me
      </Container> */}
    </main>
  );
}

export default App;
