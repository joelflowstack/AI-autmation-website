interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({
  text,
  className = "",
}: GlitchTextProps) {

  return (

    <h1
      className={`
      cyber-glitch
      ${className}
      `}
      data-text={text}
    >
      {text}
    </h1>

  );
}
