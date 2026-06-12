export default function FloatingHUD() {

  return (

    <div
      className="
      hidden
      xl:block
      fixed
      right-10
      bottom-10
      z-40
      "
    >

      <div
        className="
        cyber-chamfer
        bg-black
        border
        border-accent
        p-4
        text-xs
        shadow-[0_0_25px_#00ff88]
        "
      >

        <div>
          AI STATUS
        </div>

        <div className="text-accent">
          ONLINE
        </div>

      </div>

    </div>

  );
}
