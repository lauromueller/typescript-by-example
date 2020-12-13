import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';

const GreetingText = (props: any) => {
  const greetingText = props.timeOfDay === 'morning' ? 'Good morning' : 'Good evening';

  return <h1>
    {greetingText}
  </h1>
}

const App = () => {
  return (
    <div className="App">
      <GreetingText timeOfDay='morning' />
      <Button color='primary' variant='contained'>
        Some text
      </Button>
    </div>
  );
}

export default App;
