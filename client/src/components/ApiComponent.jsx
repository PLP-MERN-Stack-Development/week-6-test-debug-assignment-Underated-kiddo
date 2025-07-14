import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiComponent() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('/api/message').then(res => setMessage(res.data.message));
  }, []);
  return <div>{message}</div>;
}
export default ApiComponent;
