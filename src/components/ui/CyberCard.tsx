import { ReactNode } from "react";

export default function CyberCard({
  children
}:{
  children:ReactNode
}) {

  return (
    <div
      className="
      cyber-chamfer
      border
      border-[#2a2a3a]
      bg-[#12121a]
      p-6
      transition-all
      hover:border-[#00ff88]
      hover:shadow-[0_0_20px_#00ff88]
      "
    >
      {children}
    </div>
  );
}
