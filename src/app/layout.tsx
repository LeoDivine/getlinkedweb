import Navbar from '@/components/layouts/navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GetLinked AI',
  description: 'Project Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
