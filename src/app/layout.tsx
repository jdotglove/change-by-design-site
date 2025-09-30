import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Button from '@/components/Button';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Change By Design",
  description: "A digital transformation company specializing in executive coaching, leadership training, and program creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Change By Design</h3>
                <p className="text-slate-400">
                  Real-time transformation | Future-focused leadership | Measurable results
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Programs</Link></li>
                  <li><Link href="/assessments" className="text-slate-400 hover:text-white transition-colors">Assesments</Link></li>
                  <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-slate-400">
                  Ready to transform your business? Get in touch today.
                </p>
                <Button href="/contact" variant="primary" className="mt-4 !rounded-md !py-2 !px-6 !text-base" showIcon={false}>
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
              <p>&copy; {new Date().getFullYear()} Change By Design. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
