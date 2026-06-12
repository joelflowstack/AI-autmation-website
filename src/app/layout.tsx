import "./globals.css";

import {
  Orbitron,
  Share_Tech_Mono,
  JetBrains_Mono
} from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
});

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});

import type { Metadata }
from "next";

export const metadata: Metadata = {

  title:
    "AI Automation Agency",

  description:
    "Deploy AI employees that answer leads, book meetings, update CRMs and work 24/7.",

  keywords: [

    "AI Automation",

    "AI Agency",

    "AI Chatbots",

    "AI Voice Agents",

    "Business Automation",

  ],

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body
        className={`
          ${orbitron.className}
          ${shareTech.className}
          ${jetbrains.className}
          bg-background
          text-foreground
        `}
      >
        {children}
      </body>

    </html>
  );
}
