import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons:{
    icon:'/favicon.ico'
  },
  title: "Engineers' Day",
  description: "Engineers' Day Website for Uttaranchal Insitute of Technology Department, Created to provide details of the events and to register the User.",
};

export default function RootLayout({ children }) {
  const id="foot-id"
  return (
    <html lang="en" className="dark bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar id={id}/>
        {children}
        <Footer id={id}/>
      </body>
    </html>
  );
}
