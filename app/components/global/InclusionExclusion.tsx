"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

const inclusionData: string[] = [
  "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes.",
  "Explore iconic Burj Khalifa and Dubai Mall.",
  "Desert safari adventure with BBQ dinner.",
  "Dhow Cruise experience.",
  "Airport pickup and drop service.",
  "Comfortable hotel accommodation.",
];

const exclusionData: string[] = [
  "International airfare not included.",
  "Personal shopping expenses.",
  "Visa fees.",
  "Travel insurance.",
  "Optional activities not mentioned.",
  "Any meals not specified in itinerary.",
];

export default function InclusionExclusion() {
  return (
    <section className="bg-[#f4efec] ">
      <div className="">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm">

          <Tabs defaultValue="inclusion" className="w-full">

           {/* TAB HEADINGS */}
<TabsList className="flex items-center justify-start gap-2 sm:gap-4 mb-5 sm:mb-8 bg-transparent p-0">

  <TabsTrigger
    value="inclusion"
    className="text-xs sm:text-base font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl 
    data-[state=active]:bg-green-100 
    data-[state=active]:border-l-4 
    data-[state=active]:border-green-700 
    data-[state=active]:text-black"
  >
    Inclusion
  </TabsTrigger>

  <TabsTrigger
    value="exclusion"
    className="text-xs sm:text-base font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl 
    data-[state=active]:bg-orange-100 
    data-[state=active]:border-l-4 
    data-[state=active]:border-orange-600 
    data-[state=active]:text-black"
  >
    Exclusion
  </TabsTrigger>

</TabsList>

            {/* INCLUSION CONTENT */}
            <TabsContent value="inclusion">
              <div className="bg-green-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                {inclusionData.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-4">
                    <div className="bg-green-500 text-white rounded-full p-1 shrink-0">
                      <Check size={12} className="sm:w-4 sm:h-4" />
                    </div>
                    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* EXCLUSION CONTENT */}
            <TabsContent value="exclusion">
              <div className="bg-orange-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                {exclusionData.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-4">
                    <div className="bg-orange-500 text-white rounded-full p-1 shrink-0">
                      <X size={12} className="sm:w-4 sm:h-4" />
                    </div>
                    <p className="text-gray-800 text-xs sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

          </Tabs>

        </div>
      </div>
    </section>
  );
}