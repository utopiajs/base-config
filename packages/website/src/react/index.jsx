import React, { useState, useEffect } from 'react';

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Date.now());
  }, []);
  return <div>{`base config ${num}`}</div>;
}

export default App;
