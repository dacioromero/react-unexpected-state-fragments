import { useRef, useEffect } from "react";

export function useInterval (cb: any, timeout?: number) {
  const cbRef = useRef(cb)
  cbRef.current = cb

  useEffect(() => {
    function tick () {
      cbRef.current()
    }

    const interval = setInterval(tick, timeout)

    return () => clearInterval(interval)
  }, [timeout])
}
