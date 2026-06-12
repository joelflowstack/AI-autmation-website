import GlitchText from "../effects/GlitchText";

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
  text="STOP LOSING LEADS TO SLOW RESPONSE TIMES"
  className="
  text-7xl
  font-black
  uppercase
  leading-none
  "
/>

            <p className="mt-8 text-lg max-w-xl">
              We build AI employees that answer,
              qualify and convert customers 24/7.
            </p>

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
