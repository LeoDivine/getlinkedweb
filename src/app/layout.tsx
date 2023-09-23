import Footer from '@/components/layouts/footer';
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Unica_One } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const unica = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-unica",
});

export const metadata: Metadata = {
  title: "GetLinked AI",
  description: "Project Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${unica.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
