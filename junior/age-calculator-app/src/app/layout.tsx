import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Age Calculator App",
  description: "Get to know the exact amount of time you've been living!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-dvh bg-neutral-grey-200 flex flex-col items-center justify-center ${poppins.variable} antialiased`}
      >
        {children}

        <footer className="text-purple-800 hidden">
          Challenge by <a className="underline font-bold hover:font-extrabold duration-250" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q" target="_blank">Frontend Mentor</a>. 
          Coded by <a className="underline font-bold hover:font-extrabold duration-250" href="#">Fernando Pérez</a>.
        </footer>
      </body>
    </html>
  );
}
