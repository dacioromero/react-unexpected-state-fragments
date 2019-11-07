import React, { FC, useState } from 'react'

import { useInterval } from './hooks'

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  useInterval(() => setCount(count => count + .1), 100)

  return <p>{count.toFixed(1)}s</p>
}

export default Counter
