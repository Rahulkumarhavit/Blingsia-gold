import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import {Navbar,Footer} from "../components/index"
import "./globals.css";

export const metadata: Metadata = {
  title: "Best 24 Carat Digital Gold Investment App in India | Blingsia",
  description: "Unlock financial wealth with Blingsia, your secure digital gold investment app. Invest confidently, win exclusive rewards, and diversify effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <Navbar />
          {children}
          <Analytics />
          <section className="padding-x padding-t pb-8">
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
