"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin } from "lucide-react";
import useSound from "use-sound"; // Uncomment if you have 'scroll-open.mp3'

// --- Mock Data ---
const events = {
  Day1: [
    { title: "The Poet's Den", time: "10 AM", loc: "Audi", desc: "Slam Poetry Competition" },
    { title: "Ink & Quill", time: "2 PM", loc: "Room 101", desc: "Creative Writing Workshop" },
  ],
  Day2: [
    { title: "Grand Debate", time: "11 AM", loc: "Seminar Hall", desc: "Classic vs Modern Lit" },
    { title: "Trivia Hunt", time: "3 PM", loc: "Campus", desc: "Literature themed treasure hunt" },
  ],
  Day3: [
    { title: "Open Mic Night", time: "5 PM", loc: "Amphi", desc: "Music & Poetry under stars" },
  ]
};

export default function Events() {
  const [activeTab, setActiveTab] = useState("Day1");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [playScroll] = useSound('/scroll-open.mp3');

  const handleOpenEvent = (evt: any) => {
    playScroll(); // Play sound
    setSelectedEvent(evt);
  };

  return (
    <div className="min-h-screen py-32 px-4 max-w-7xl mx-auto">
      <h1 className="font-display text-6xl text-center text-maroon mb-12">The Chronicles</h1>

      {/* --- TABS --- */}
      <div className="flex justify-center gap-8 mb-16 font-display text-xl border-b border-maroon/10 pb-4">
        {["Day1", "Day2", "Day3"].map((day) => (
          <button
            key={day}
            onClick={() => setActiveTab(day)}
            className={`transition-all duration-300 ${activeTab === day ? "text-maroon scale-110 font-bold" : "text-ink/40 hover:text-ink/80"}`}
          >
            {day.replace(/(\d)/, " $1")}
          </button>
        ))}
      </div>

      {/* --- CARDS GRID --- */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {events[activeTab as keyof typeof events].map((evt, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            onClick={() => handleOpenEvent(evt)}
            className="cursor-pointer bg-[#fffcf5] border border-maroon/10 p-8 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-maroon/0 group-hover:bg-maroon transition-all duration-300"/>
            <h3 className="font-display text-2xl text-ink mb-2 group-hover:text-maroon transition-colors">{evt.title}</h3>
            <p className="font-body text-ink/60 italic text-sm mb-4">{evt.desc}</p>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gold uppercase">
               <span>{evt.time}</span> • <span>{evt.loc}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- THE SCROLL MODAL (Old Paper Effect) --- */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            
            {/* The Scroll Container */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="bg-[#e8e4da] w-full max-w-lg relative overflow-hidden shadow-2xl origin-top"
              style={{ 
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.05) 100%)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)" 
              }}
            >
              {/* Wooden Rollers (Top & Bottom visuals) */}
              <div className="h-4 bg-[#5c4033] w-full shadow-inner border-b border-[#3e2b22]"/>
              
              <div className="p-12 text-center relative">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-maroon/50 hover:text-maroon"
                >
                  <X size={24} />
                </button>

                <h2 className="font-hand text-6xl text-maroon mb-2">{selectedEvent.title}</h2>
                <div className="w-24 h-0.5 bg-gold mx-auto mb-6"/>
                
                <p className="font-body text-lg leading-loose text-justify text-ink/80 mb-8">
                  "This event invites all scholars and poets to witness the magic of {selectedEvent.desc}. It shall be held at the stroke of {selectedEvent.time} within the halls of {selectedEvent.loc}. Prepare your quills."
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm font-display text-maroon/80 border-t border-maroon/10 pt-6">
                   <div className="flex items-center justify-center gap-2">
                     <Clock size={16}/> {selectedEvent.time}
                   </div>
                   <div className="flex items-center justify-center gap-2">
                     <MapPin size={16}/> {selectedEvent.loc}
                   </div>
                </div>
              </div>

              <div className="h-4 bg-[#5c4033] w-full shadow-inner border-t border-[#3e2b22]"/>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}