"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
}

export default function TypingText({
  text
}: Props) {

  const [display, setDisplay] =
    useState("");

  useEffect(() => {

    let i = 0;

    const interval =
      setInterval(() => {

        setDisplay(
          text.slice(0, i)
        );

        i++;

        if (i > text.length) {
          clearInterval(interval);
        }

      }, 50);

    return () =>
      clearInterval(interval);

  }, [text]);

  return (
    <span>
      {display}
      <span className="cursor-blink">█</span>
    </span>
  );
}
