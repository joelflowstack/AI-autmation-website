import CyberCard from "../ui/CyberCard";

const services = [
  "AI Chatbots",
  "AI Voice Agents",
  "Lead Qualification",
  "CRM Automation",
  "Appointment Booking",
  "Customer Support",
];

export default function Services() {

  return (
    <section
      className="
      py-32
      px-6
      cyber-grid
      "
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-accent uppercase tracking-[0.3em]">
            Services
          </p>

          <h2
            className="
            text-5xl
            font-black
            uppercase
            mt-4
            "
          >
            AI Automation Systems
          </h2>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {services.map((service, index) => (

            <div
              key={service}
              className={
                index % 2 === 0
                  ? "rotate-1"
                  : "-rotate-1"
              }
            >

              <CyberCard>

                <div
                  className="
                  text-2xl
                  font-bold
                  text-accent
                  mb-4
                  "
                >
                  {service}
                </div>

                <p>
                  Automate repetitive
                  business processes
                  and capture more leads
                  around the clock.
                </p>

              </CyberCard>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
