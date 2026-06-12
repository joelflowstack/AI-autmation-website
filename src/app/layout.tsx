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

export const metadata = {
  title: "AI Automation Agency",
  description:
    "AI Employees That Work 24/7",
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
