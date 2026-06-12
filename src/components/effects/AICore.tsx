export default function AICore() {

  return (

    <div
      className="
      relative
      w-64
      h-64
      mx-auto
      "
    >

      <div
        className="
        absolute
        inset-0
        rounded-full
        border
        border-accent
        animate-spin
        "
      />

      <div
        className="
        absolute
        inset-8
        rounded-full
        border
        border-secondary
        animate-spin
        "
        style={{
          animationDirection: "reverse",
          animationDuration: "8s",
        }}
      />

      <div
        className="
        absolute
        inset-16
        rounded-full
        bg-accent
        shadow-[0_0_60px_#00ff88]
        "
      />

    </div>

  );
}
