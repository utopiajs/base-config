import React, { useState, useEffect, type FC } from 'react';

interface AppProps {
  prefixCls: string;
}

const App: FC<AppProps> = (props) => {
  const { prefixCls } = props;
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Date.now());
  }, []);

  return <div className={`${prefixCls}-app`}>{`base config ${num}`}</div>;
};

export default App;
