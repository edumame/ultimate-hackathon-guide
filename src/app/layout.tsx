import { clsx } from "clsx";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";
import "./globals.css";

const InterVariable = localFont({
  variable: "--font-inter",
  src: [
    { path: "./InterVariable.woff2", style: "normal" },
    { path: "./InterVariable-Italic.woff2", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "The Ultimate Hackathon Guide",
  description:
    "A practical playbook for designing, running, and improving hackathons in the age of AI — built from interviews with 100 hackathon organizers, in collaboration with freeCodeCamp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        GeistMono.variable,
        InterVariable.variable,
        "scroll-pt-16 font-sans antialiased dark:bg-gray-950",
      )}
    >
      <body>
        <div className="relative z-20 bg-brand px-4 py-1.5 text-center text-sm/6 text-white">
          <span className="font-semibold">Work in progress</span> — this guide
          grows with every organizer interview.{" "}
          <a
            href="https://calendly.com/chinat/hackathon-interview"
            className="font-semibold underline underline-offset-2 hover:text-brand-soft"
          >
            Organized a hackathon? Get interviewed&nbsp;&rarr;
          </a>
        </div>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
