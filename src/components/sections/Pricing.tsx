import CyberCard from "../ui/CyberCard";
import CyberButton from "../ui/CyberButton";

const plans = [
  {
    name: "STARTER",
    price: "$997",
    features: [
      "AI Chatbot",
      "Lead Capture",
      "Email Automation",
      "Basic Support"
    ]
  },
  {
    name: "GROWTH",
    price: "$2,497",
    featured: true,
    features: [
      "AI Chatbot",
      "Voice Agent",
      "CRM Automation",
      "Appointment Booking",
      "Priority Support"
    ]
  },
  {
    name: "ENTERPRISE",
    price: "CUSTOM",
    features: [
      "Everything Included",
      "Custom Integrations",
      "Dedicated Team",
      "Unlimited Workflows"
    ]
  }
];

export default function Pricing() {

  return (
    <section className="py-32 px-6 cyber-grid">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-[#ff00ff] uppercase tracking-[0.3em]">
            Pricing
          </p>

          <h2 className="text-5xl font-black uppercase mt-4">
            Deploy Your AI Workforce
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={
                plan.featured
                  ? "scale-105"
                  : ""
              }
            >

              <CyberCard>

                <div className="mb-8">

                  <h3 className="text-2xl font-bold text-[#00ff88]">
                    {plan.name}
                  </h3>

                  <div className="text-4xl font-black mt-4">
                    {plan.price}
                  </div>

                </div>

                <div className="space-y-4 mb-8">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="text-[#e0e0e0]"
                    >
                      {">"} {feature}
                    </div>

                  ))}

                </div>

                <CyberButton>
                  Get Started
                </CyberButton>

              </CyberCard>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
