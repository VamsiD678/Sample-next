import Header from './_components/Header'

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from './_components/Footer';
import { Toaster } from 'react-hot-toast';


const ibmSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ["latin"],
  weight : ['300','400','500','700']
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nextjs App",
    default: "Home | Nextjs App"
  },
  description: "Search Engine optimization, Digital Marketing and Web design & Development"
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>)
{
  return (
    <html lang="en">
      <body
        className={`${ibmSans.className} flex flex-col antialiased`}>
        <Header />

        <main className='min-h-screen overflow-hidden'>
          {children}
        </main>

        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
