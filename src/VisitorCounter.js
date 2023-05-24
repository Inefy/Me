import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_IP } from './config';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    axios.get(`${SERVER_IP}/visitors`)
      .then(response => setVisitorCount(response.data.visitorCount));
  }, []);

  return <p>Visitor count: {visitorCount}</p>;
}

export default VisitorCounter;
