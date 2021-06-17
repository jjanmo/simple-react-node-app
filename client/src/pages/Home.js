import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log('😈', res.data));
  }, []);

  return <h1>This is Home page</h1>;
};

export default Home;
