"use client";

import { useState } from "react";

import CyberInput from "../ui/CyberInput";
import CyberButton from "../ui/CyberButton";

export default function Contact() {

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await fetch("/api/contact", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name:
              (
                e.target as HTMLFormElement
              ).name.value,

            email:
              (
                e.target as HTMLFormElement
              ).email.value,

            company:
              (
                e.target as HTMLFormElement
              ).company.value,

            volume:
              (
                e.target as HTMLFormElement
              ).volume.value,
          }),
        });

      if (response.ok) {

        alert(
          "Lead submitted successfully."
        );

      }

    } catch {

      alert("Submission failed.");

    }

    setLoading(false);

  };

  return (

    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-3xl mx-auto">

        <h2
          className="
          text-5xl
          font-black
          uppercase
          text-center
          mb-16
          "
        >
          Deploy AI
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <CyberInput
            name="name"
            placeholder="Name"
          />

          <CyberInput
            name="email"
            placeholder="Email"
          />

          <CyberInput
            name="company"
            placeholder="Company"
          />

          <CyberInput
            name="volume"
            placeholder="Monthly Leads"
          />

          <CyberButton
            type="submit"
          >
            {
              loading
                ? "PROCESSING..."
                : "BOOK STRATEGY CALL"
            }
          </CyberButton>

        </form>

      </div>

    </section>

  );
}
