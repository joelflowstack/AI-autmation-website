export default function NoiseOverlay() {

  return (

    <div
      className="
      absolute
      inset-0
      opacity-5
      pointer-events-none
      "
      style={{
        backgroundImage:
          "radial-gradient(#fff 1px, transparent 1px)",
        backgroundSize:
          "4px 4px",
      }}
    />

  );
}
