import "./styles/globals.scss";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

import Navbar from "@/components/Navbar";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Country App - Wander Paniagua",
  description: "Country API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
