import type { Metadata } from "next";
import { Playfair_Display, Lora, Great_Vibes } from "next/font/google";
import Link from "next/link";
import { Instagram } from "lucide-react"; // Import Instagram Icon
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-cursive" });

export const metadata: Metadata = {
  title: "Raabta | NSUT Literature Fest",
  description: "The annual celebration of words and verses at NSUT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${greatVibes.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative">
        
        {/* --- Top Right Instagram Link --- */}
        <a 
          href="https://instagram.com/raabtansut" // Replace with actual handle
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed top-8 right-8 z-50 text-maroon hover:text-gold hover:scale-110 transition-all duration-300"
        >
          <Instagram size={28} strokeWidth={1.5} />
        </a>

        {/* --- Centered Navbar --- */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-paper/90 backdrop-blur-sm border border-maroon/20 px-8 py-3 rounded-full shadow-lg flex items-center gap-8 md:gap-12">
           <Link href="/" className="font-display text-lg tracking-wide hover:text-maroon transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon transition-all group-hover:w-full"></span>
           </Link>
           
           {/* Small Divider */}
           <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>

           <Link href="/events" className="font-display text-lg tracking-wide hover:text-maroon transition-colors relative group">
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon transition-all group-hover:w-full"></span>
           </Link>

           {/* Small Divider */}
           <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>

           {/* Scroll to About Section */}
           <Link href="/#about" className="font-display text-lg tracking-wide hover:text-maroon transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon transition-all group-hover:w-full"></span>
           </Link>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}