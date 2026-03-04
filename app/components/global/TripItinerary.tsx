"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

interface ItineraryItem {
  day: string;
  title: string;
  content: string[];
}

const itineraryData: ItineraryItem[] = [
  {
    day: "Day 01",
    title: "Embark on a journey through Dubai’s stunning",
    content: [
      "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, each stop offers a unique blend of luxury and tradition each stop.",
      "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks.",
      "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes."
    ],
  },
  {
    day: "Day 02",
    title: "Explore Burj Khalifa & Dubai Mall",
    content: [
      "Visit the world’s tallest building and enjoy breathtaking views from the top.",
      "Shop at Dubai Mall and explore the aquarium.",
    ],
  },
  {
    day: "Day 03",
    title: "Desert Safari Adventure",
    content: [
      "Experience dune bashing and camel riding.",
      "Enjoy traditional BBQ dinner with cultural performances.",
    ],
  },
];

export default function TripItinerary() {
  return (
    <section className="bg-[#f4efec] ">
      <div className="">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Trip Itinerary:
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {itineraryData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-2xl bg-[#f8f4f2] px-4 md:px-6"
              >
                <AccordionTrigger
                  className="py-5 hover:no-underline group"
                >
                  <div className="flex items-center gap-4 text-left w-full">

                    {/* Day Badge */}
                    <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      {item.day}
                    </span>

                    {/* Title */}
                    <span className="text-base md:text-lg font-medium flex-1">
                      {item.title}
                    </span>

                  
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6 pt-2">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm md:text-base">
                    {item.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
}