import CyberButton from "../ui/CyberButton";

export default function CTA() {

  return (

    <section className="py-40 px-6 text-center cyber-grid">

      <div className="max-w-5xl mx-auto">

        <h2
          className="
          text-7xl
          font-black
          uppercase
          glitch
          rgb-shift
          "
        >
          THE FUTURE DOESN'T HIRE MORE STAFF IT DEPLOYS AI
        </h2>

        <p className="mt-10 text-xl">

          Deploy your first AI employee
          in less than 7 days.

        </p>

        <div className="mt-12">

          <CyberButton variant="glitch">
            DEPLOY NOW
          </CyberButton>

        </div>

      </div>

    </section>

  );
}
