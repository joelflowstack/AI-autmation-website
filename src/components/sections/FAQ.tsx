"use client";

import { useState } from "react";

import CyberCard from "../ui/CyberCard";

const faqs = [

  {
    q: "How fast can we launch?",
    a: "Usually within 7 days."
  },

  {
    q: "Do you support CRM integrations?",
    a: "Yes, including HubSpot and Salesforce."
  },

  {
    q: "Can AI answer phone calls?",
    a: "Yes. Voice agents are supported."
  },

];

export default function FAQ() {

  const [open, setOpen] =
    useState<number | null>(null);

  return (

    <section className="py-32 px-6">

      <div className="max-w-4xl mx-auto">

        <h2
          className="
          text-5xl
          font-black
          uppercase
          text-center
          mb-16
          "
        >
          FAQ
        </h2>

        <div className="space-y-6">

          {faqs.map(
            (faq, index) => (

              <CyberCard
                key={faq.q}
              >

                <button
                  onClick={() =>
                    setOpen(
                      open === index
                        ? null
                        : index
                    )
                  }
                  className="
                  w-full
                  text-left
                  text-accent
                  text-xl
                  "
                >
                  {faq.q}
                </button>

                {open === index && (

                  <div className="mt-4">

                    {faq.a}

                  </div>

                )}

              </CyberCard>

            )
          )}

        </div>

      </div>

    </section>

  );
}
