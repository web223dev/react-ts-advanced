import Input from './components/input';

function App() {
  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
    </main>
  );
}

export default App;
