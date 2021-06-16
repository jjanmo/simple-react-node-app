import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const sayHello = async () => await axios.get('/hello');

  useEffect(() => {
    const result = sayHello();
    console.log(result);
  }, []);

  return <h1>This is Home page</h1>;
};

export default Home;
