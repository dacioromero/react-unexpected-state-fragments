import React, { FC, useState } from 'react';

import { useInterval } from './hooks';
import Counter from './Counter';

const App: FC = () => {
  const [isDouble, setIsDouble] = useState(false)
  useInterval(() => setIsDouble(isDouble => !isDouble), 2000)

  if (isDouble) {
    return (
      <>
        <Counter />
        <Counter />
      </>
    )
  }

  return <Counter />
}


export default App
