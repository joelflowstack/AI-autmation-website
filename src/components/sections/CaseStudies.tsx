import CyberCard from "../ui/CyberCard";

const studies = [

  {
    company: "REAL ESTATE GROUP",
    result: "+312% Lead Response Rate",
  },

  {
    company: "MARKETING AGENCY",
    result: "+147 Meetings Booked",
  },

  {
    company: "CONSULTING FIRM",
    result: "24/7 AI Receptionist",
  },

];

export default function CaseStudies() {

  return (

    <section
      className="
      py-32
      px-6
      relative
      "
    >

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p
            className="
            text-accent
            uppercase
            tracking-[0.3em]
            "
          >
            Results
          </p>

          <h2
            className="
            text-5xl
            font-black
            uppercase
            "
          >
            Proven AI Outcomes
          </h2>

        </div>

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          "
        >

          {studies.map((study, index) => (

            <div
              key={study.company}
              className={
                index === 1
                  ? "-translate-y-8"
                  : ""
              }
            >

              <CyberCard variant="terminal">

                <div className="mb-6">

                  <div
                    className="
                    flex
                    gap-2
                    mb-4
                    "
                  >

                    <div className="w-3 h-3 rounded-full bg-red-500" />

                    <div className="w-3 h-3 rounded-full bg-yellow-500" />

                    <div className="w-3 h-3 rounded-full bg-green-500" />

                  </div>

                  <div className="text-accent">
                    {study.company}
                  </div>

                </div>

                <div
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  {study.result}
                </div>

              </CyberCard>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}
