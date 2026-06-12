import CyberCard from "../ui/CyberCard";

export default function Showcase() {

  return (

    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-[#00d4ff] uppercase tracking-[0.3em]">
            AI Employee
          </p>

          <h2 className="text-5xl font-black uppercase mt-4">
            AI Agent Online
          </h2>

        </div>

        <CyberCard>

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <div className="text-[#00ff88] text-2xl font-bold mb-10">
                SYSTEM STATUS: ACTIVE
              </div>

              <div className="space-y-6">

                <div>
                  Response Time: &lt; 3 Seconds
                </div>

                <div>
                  Leads Captured: 1,284
                </div>

                <div>
                  Meetings Booked: 347
                </div>

                <div>
                  Availability: 24/7
                </div>

              </div>

            </div>

            <div>

              <div
                className="
                border
                border-[#00d4ff]
                h-72
                cyber-chamfer
                flex
                items-center
                justify-center
                text-[#00d4ff]
                text-2xl
                shadow-[0_0_40px_#00d4ff]
                "
              >
                AI CORE
              </div>

            </div>

          </div>

        </CyberCard>

      </div>

    </section>

  );
}
