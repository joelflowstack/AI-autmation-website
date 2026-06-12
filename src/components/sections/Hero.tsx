import GlitchText from "../effects/GlitchText";
import TypingText from "../effects/TypingText";

export default function Hero() {

  return (

    <section
      className="
      min-h-screen
      cyber-grid
      flex
      items-center
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-[#00ff88] uppercase tracking-[0.3em]">
              [ Status : Online ]
            </p>

          <GlitchText
  text="YOUR NEXT EMPLOYEE IS AN AI SYSTEM"
  className="
  text-7xl
  font-black
  uppercase
  leading-none
  "
/>

            <div
  className="
  mt-8
  text-lg
  max-w-xl
  "
>
  <TypingText
    text="
    Deploy AI employees that answer leads,
book meetings, update CRMs,
follow up automatically and work 24/7..
    "
  />
</div>

            <div className="flex gap-4 mt-10">

              <CyberButton>
                Deploy Your AI
              </CyberButton>

              <CyberButton variant="secondary">
                Watch Demo
              </CyberButton>

            </div>

          </div>

          <div>

            <div
              className="
              cyber-chamfer
              border
              border-[#00d4ff]
              p-8
              bg-black
              "
            >

              <p>{">"} Incoming Lead</p>
              <p>{">"} Qualification Complete</p>
              <p>{">"} Meeting Scheduled</p>
              <p>{">"} CRM Updated</p>
              <p>{">"} Follow-up Sent</p>

              <div className="mt-8 text-[#00ff88]">
                SYSTEM STATUS: ACTIVE
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}
