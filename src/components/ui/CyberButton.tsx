import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "glitch";
}

export default function CyberButton({
  variant = "default",
  children,
  ...props
}: Props) {

  const styles = {

    default:
      "border-2 border-[#00ff88] text-[#00ff88]",

    secondary:
      "border-2 border-[#ff00ff] text-[#ff00ff]",

    outline:
      "border border-[#2a2a3a]",

    ghost:
      "",

    glitch:
      "bg-[#00ff88] text-black glitch"

  };

  return (
    <button
      {...props}
      className={`cyber-chamfer uppercase tracking-widest px-6 py-3 transition-all hover:shadow-[0_0_20px_#00ff88] ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
