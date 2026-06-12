import CyberButton from "../ui/CyberButton";

export default function Navbar() {

  return (

    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      border-b
      border-border
      backdrop-blur-md
      bg-black/40
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        <div
          className="
          text-accent
          uppercase
          tracking-[0.3em]
          font-bold
          "
        >
          AI//AGENCY
        </div>

        <nav
          className="
          hidden
          lg:flex
          gap-8
          uppercase
          "
        >

          <a href="#services">
            Services
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

        <CyberButton>
          Book Demo
        </CyberButton>

      </div>

    </header>

  );
}
