"use client";

import { useState } from "react";

import CyberButton from "../ui/CyberButton";

export default function MobileMenu() {

  const [open, setOpen] =
    useState(false);

  return (

    <div className="lg:hidden">

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
        text-accent
        text-2xl
        "
      >
        ☰
      </button>

      {open && (

        <div
          className="
          absolute
          top-20
          left-0
          right-0
          bg-black
          border-t
          border-border
          p-6
          "
        >

          <div className="flex flex-col gap-4">

            <a href="#services">
              Services
            </a>

            <a href="#pricing">
              Pricing
            </a>

            <a href="#contact">
              Contact
            </a>

            <CyberButton>
              Book Demo
            </CyberButton>

          </div>

        </div>

      )}

    </div>

  );
}
