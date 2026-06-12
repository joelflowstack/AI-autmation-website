"use client";

import { useEffect, useState } from "react";

interface Props {
  target: number;
}

export default function Counter({
  target,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(target / 50);

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <>{count}</>;
}
