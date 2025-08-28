import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Change By Design</h3>
                <p className="text-slate-400">
                  Real-time business transformation that delivers measurable results for growing organizations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/programs" className="text-slate-400 hover:text-white transition-colors">Programs</a></li>
                  <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/coaching" className="text-slate-400 hover:text-white transition-colors">Executive Coaching</a></li>
                  <li><a href="/training" className="text-slate-400 hover:text-white transition-colors">Leadership Training</a></li>
                  <li><a href="/programs" className="text-slate-400 hover:text-white transition-colors">Transformation Programs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-slate-400">
                  Ready to transform your business? Get in touch today.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
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
