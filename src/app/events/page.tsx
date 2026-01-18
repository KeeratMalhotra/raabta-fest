"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock Data for Events
const eventsData = {
  day1: [
    { id: 1, title: "The Poet's Den", time: "10:00 AM", location: "Main Audi", description: "A slam poetry competition where words bleed and hearts speak.", image: "🎙️" },
    { id: 2, title: "Book Exchange", time: "12:00 PM", location: "Library Lawns", description: "Bring a book, take a book. A blind date with literature.", image: "📚" },
    { id: 3, title: "Debate: Classic vs Modern", time: "2:00 PM", location: "Seminar Hall", description: "Is Shakespeare still relevant? Come fight for your stance.", image: "⚔️" },
  ],
  day2: [
    { id: 4, title: "Shakespearean Drama", time: "11:00 AM", location: "Amphi", description: "To be or not to be? Enact your favorite scenes.", image: "🎭" },
    { id: 5, title: "Creative Writing Workshop", time: "3:00 PM", location: "Room 202", description: "Unlock the novel inside you with guidance from top authors.", image: "✍️" },
  ],
  day3: [
    { id: 6, title: "The Grand Finale", time: "5:00 PM", location: "Main Stage", description: "Music, poetry, and the closing ceremony.", image: "🎉" },
  ]
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#f9f7f1] py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-6xl text-[#4a0404] text-center mb-12">
          Chronicles of Raabta
        </h1>

        <Tabs defaultValue="day1" className="w-full flex flex-col items-center">
          <TabsList className="bg-transparent border-b border-[#4a0404]/20 w-full max-w-md justify-between mb-12 rounded-none h-auto p-0">
            {["Day 1", "Day 2", "Day 3"].map((day, idx) => (
              <TabsTrigger 
                key={day} 
                value={`day${idx + 1}`}
                className="font-playfair text-xl data-[state=active]:text-[#4a0404] data-[state=active]:border-b-2 data-[state=active]:border-[#4a0404] data-[state=active]:bg-transparent rounded-none px-6 py-2 transition-all"
              >
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(eventsData).map(([dayKey, events]) => (
            <TabsContent key={dayKey} value={dayKey} className="w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {events.map((event) => (
                  <motion.div whileHover={{ scale: 1.02 }} key={event.id}>
                    <Card 
                      className="cursor-pointer bg-white border border-[#d4af37]/30 shadow-sm hover:shadow-md transition-all h-64 flex flex-col justify-between overflow-hidden group"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent className="p-6 relative h-full flex flex-col items-center justify-center text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{event.image}</div>
                        <h3 className="font-playfair text-2xl text-[#2a1a1a] mb-2">{event.title}</h3>
                        <p className="font-lora text-sm text-gray-500 italic">{event.time} | {event.location}</p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4a0404] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* The "Bigger Card" Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-2xl bg-[#fffefb] border-2 border-[#4a0404] text-[#2a1a1a] font-serif">
            <DialogHeader>
              <DialogTitle className="font-playfair text-4xl text-[#4a0404] mb-2">
                {selectedEvent?.title}
              </DialogTitle>
              <div className="flex items-center gap-4 text-sm font-lora text-[#d4af37] font-bold uppercase tracking-widest">
                <span>{selectedEvent?.time}</span>
                <span>•</span>
                <span>{selectedEvent?.location}</span>
              </div>
            </DialogHeader>
            <div className="mt-6 font-lora text-lg leading-relaxed text-gray-700">
               {/* Simulating lots of content */}
              <p>{selectedEvent?.description}</p>
              <div className="mt-6 p-4 bg-[#f9f7f1] border-l-4 border-[#4a0404] italic text-gray-600">
                "Here is where more detailed rules, judge info, or gibberish lore about the specific event would go."
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}