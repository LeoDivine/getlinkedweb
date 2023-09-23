import Navbar from '@/components/layouts/navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Unica_One } from "next/font/google";
import Footer from '@/components/layouts/footer';

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
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
