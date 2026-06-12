import CyberInput from "../ui/CyberInput";
import CyberButton from "../ui/CyberButton";

export default function Contact() {

  return (

    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-3xl mx-auto">

        <h2
          className="
          text-center
          text-5xl
          uppercase
          font-black
          mb-16
          "
        >
          Contact
        </h2>

        <div className="space-y-6">

          <CyberInput placeholder="Name" />

          <CyberInput placeholder="Email" />

          <CyberInput placeholder="Company" />

          <CyberButton>
            Book Strategy Call
          </CyberButton>

        </div>

      </div>

    </section>

  );
}
