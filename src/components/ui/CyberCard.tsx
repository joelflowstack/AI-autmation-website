import { ReactNode } from "react";

interface Props {

  children: ReactNode;

  variant?:
    | "default"
    | "terminal"
    | "holographic";
}

export default function CyberCard({

  children,

  variant = "default",

}: Props) {

  const variants = {

    default:
      "bg-card",

    terminal:
      "bg-background",

    holographic:
      `
      bg-[#1c1c2e]/30
      backdrop-blur-md
      border-[#00ff88]/30
      shadow-[0_0_30px_#00ff88]
      `,

  };

  return (

    <div
      className={`
      cyber-chamfer
      border
      border-border
      p-6
      transition-all
      hover:border-accent
      hover:shadow-[0_0_25px_#00ff88]
      ${variants[variant]}
      `}
    >
      {children}
    </div>

  );
}
