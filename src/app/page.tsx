"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Decorative Background Element */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center space-y-6 px-4"
        >
          <p className="font-lora italic text-lg text-[#4a0404]/80">The Literature Fest of NSUT</p>
          <h1 className="font-playfair text-7xl md:text-9xl font-bold text-[#4a0404] tracking-tight">
            RAABTA
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto my-6" /> {/* Gold Divider */}
          <p className="max-w-xl mx-auto font-lora text-lg leading-relaxed text-gray-700">
            "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
          </p>
        </motion.div>
      </section>

      {/* About / Gibberish Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="font-lora text-lg leading-8 text-gray-800 space-y-4">
          <h2 className="font-playfair text-4xl text-[#4a0404] mb-6">A Tale of Words</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
        
        {/* Image Placeholder with Styling */}
        <div className="relative h-96 w-full border-4 border-[#4a0404] p-2">
            <div className="w-full h-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
             {/* Replace src with actual event images */}
             <img src="/api/placeholder/400/600" alt="Fest Vibes" className="object-cover w-full h-full" />
            </div>
        </div>
      </section>
    </div>
  );
}