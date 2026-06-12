import CyberCard from "../ui/CyberCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Marketing Agency"
  },
  {
    name: "Michael Lee",
    company: "Consulting Firm"
  },
  {
    name: "David Smith",
    company: "Real Estate"
  }
];

export default function Testimonials() {

  return (

    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black uppercase">
            Client Results
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <CyberCard key={item.name}>

              <div className="text-accent mb-4">
                ★★★★★
              </div>

              <p className="mb-6">
                Our response times dropped from hours to seconds.
              </p>

              <div>

                <div className="font-bold">
                  {item.name}
                </div>

                <div className="text-gray-400">
                  {item.company}
                </div>

              </div>

            </CyberCard>

          ))}

        </div>

      </div>

    </section>

  );
}
