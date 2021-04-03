import React, { useEffect, useRef } from 'react';

const App = () => {
  const title = useRef('');

  const getTitle = async () => {
    console.log('fetch here');
    const result = await fetch('/').json();
    title.current = result.title;
  };

  useEffect(() => {
    getTitle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">{title.current}</header>
    </div>
  );
};

export default App;
