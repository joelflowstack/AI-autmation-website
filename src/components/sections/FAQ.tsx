import CyberCard from "../ui/CyberCard";

const faqs = [
  {
    q: "How quickly can we launch?",
    a: "Most systems launch within 7 days."
  },
  {
    q: "Do you integrate with CRMs?",
    a: "Yes. HubSpot, Salesforce and many more."
  },
  {
    q: "Can AI answer calls?",
    a: "Yes. We build voice agents."
  }
];

export default function FAQ() {

  return (

    <section className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black uppercase">
            FAQ
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <CyberCard key={faq.q}>

              <div className="text-accent text-xl mb-3">
                {faq.q}
              </div>

              <p>
                {faq.a}
              </p>

            </CyberCard>

          ))}

        </div>

      </div>

    </section>

  );
}
