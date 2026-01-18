import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Elegant serif for titles
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// Readable serif for body text
const lora = Lora({ 
  subsets: ["latin"], 
  variable: "--font-lora" 
});

export const metadata: Metadata = {
  title: "Raabta | The Lit Fest",
  description: "The Annual Literature Festival of NSUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-[#f9f7f1] text-[#2a1a1a] font-serif antialiased",
        playfair.variable,
        lora.variable
      )}>
        {/* Simple Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-[#f9f7f1]/80 backdrop-blur-sm border-b border-[#4a0404]/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-playfair text-2xl font-bold text-[#4a0404]">RAABTA</span>
            <div className="space-x-8 font-lora italic">
              <a href="/" className="hover:text-[#4a0404] transition-colors">Home</a>
              <a href="/events" className="hover:text-[#4a0404] transition-colors">Events</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}