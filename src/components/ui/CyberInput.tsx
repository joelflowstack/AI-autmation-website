import { InputHTMLAttributes } from "react";

export default function CyberInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {

  return (
    <div className="relative">

      <span
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-accent
        "
      >
        &gt;
      </span>

      <input
        {...props}
        className="
        w-full
        bg-card
        border
        border-border
        pl-10
        py-4
        px-4
        text-accent
        cyber-chamfer
        focus:border-accent
        focus:outline-none
        focus:shadow-[0_0_20px_#00ff88]
        "
      />

    </div>
  );
}
