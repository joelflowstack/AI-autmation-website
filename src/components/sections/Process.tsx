import CyberCard from "../ui/CyberCard";

const steps = [
  "LEAD DETECTED",
  "AI ENGAGED",
  "QUALIFICATION COMPLETE",
  "MEETING BOOKED",
  "CRM UPDATED",
  "DEAL CLOSED"
];

export default function Process() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-[#00ff88] uppercase tracking-[0.3em] mb-4">
            System Workflow
          </p>

          <h2 className="text-5xl font-black uppercase">
            AI Automation Process
          </h2>

        </div>

        <CyberCard>

          <div className="mb-8">

            <div className="text-[#00ff88]">
              ████ SYSTEM WORKFLOW ████
            </div>

          </div>

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div key={step}>

                <div className="text-xl font-bold text-[#00ff88]">
                  {">"} {step}
                </div>

                {index < steps.length - 1 && (

                  <div className="text-center text-[#00d4ff] text-3xl py-4">
                    ↓
                  </div>

                )}

              </div>

            ))}

          </div>

        </CyberCard>

      </div>

    </section>
  );
}
