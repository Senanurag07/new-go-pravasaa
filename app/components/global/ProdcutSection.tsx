"use client";

import { ReactNode } from "react";
import { MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TripItinerary from "./TripItinerary";
import InclusionExclusion from "./InclusionExclusion";
import PoliciesSection from "./PoliciesSection";

export default function ProductSection() {
  const navbarHeight: number = 80;

  return (
    <section className="relative bg-[#f4efec] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Top Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold mb-6">
                Dubai Tour Package 7N & 5D
              </h1>

              <div className="border-b border-orange-400 mb-6" />

              <div className="grid md:grid-cols-3 gap-6">

                <InfoItem
                  icon={<MapPin size={22} />}
                  label="Pickup Location"
                  value="Delhi NCR"
                />

                <InfoItem
                  icon={<MapPin size={22} />}
                  label="Drop Location"
                  value="Delhi NCR"
                />

                <InfoItem
                  icon={<Clock size={22} />}
                  label="Duration"
                  value="8 Night & 7 Days"
                />

                <InfoItem
                  icon={<Users size={22} />}
                  label="Age"
                  value="16+"
                />

                <InfoItem
                  icon={<Users size={22} />}
                  label="Happy Travellers"
                  value="1800+"
                />
              </div>
            </div>

            {/* Overview */}
            <ContentCard
              title="Dubai Tour Overview:"
              preview="Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes..."
              fullText="Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, each stop offers a unique blend of luxury and tradition. Explore desert safaris, marina cruises, global cuisine, cultural heritage and breathtaking skyline experiences."
            />

            {/* Highlights */}
            <ContentCard
              title="Trip Highlights:"
              preview="• Embark on a journey through Dubai’s stunning landscapes..."
              fullText={`• Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes.
• Explore Burj Khalifa and Dubai Mall.
• Experience Desert Safari Adventure.
• Enjoy Dhow Cruise Dinner.
• Visit Global Village and Miracle Garden.`}
            />
            <TripItinerary />
            <InclusionExclusion />
            <PoliciesSection />


          </div>

          {/* RIGHT STICKY PRICE CARD */}
          <div
            className="h-fit"
            style={{ position: "sticky", top: `${navbarHeight + 20}px` }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
              <p className="text-sm text-gray-500">Price Start From</p>
              <h2 className="text-3xl font-bold">
                Rs. 2,39,000/-
              </h2>
              <p className="text-sm text-gray-500">Per Person</p>

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Fill the Form
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- TYPES ---------------- */

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

interface ContentCardProps {
  title: string;
  preview: string;
  fullText: string;
}

/* ---------------- COMPONENTS ---------------- */

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4 bg-[#faf7f5] p-4 rounded-xl border">
      <div className="text-orange-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}:</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function ContentCard({ title, preview, fullText }: ContentCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="text-gray-600">{preview}</p>

      <Sheet>
        <SheetTrigger asChild>
          <button className="text-orange-500 font-medium hover:underline">
            View More
          </button>
        </SheetTrigger>

        <SheetContent side="bottom" className="h-[70vh]">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>

          <div className="mt-6 whitespace-pre-line text-gray-600 overflow-y-auto">
            {fullText}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}