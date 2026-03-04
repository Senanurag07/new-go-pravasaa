"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Plus } from "lucide-react";

const thingsToCarry: string[] = [
  "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks.",
  "Comfortable clothing suitable for desert weather.",
  "Valid passport and travel documents.",
  "Sunglasses and sunscreen.",
  "Personal medication.",
];

export default function PoliciesSection() {
  return (
    <section className="bg-[#f4efec] ">
      <div className="space-y-10">

        {/* ---------------- Things To Carry ---------------- */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            Things To Carry:
          </h2>

          <ul className="space-y-4 text-gray-800">
            {thingsToCarry.slice(0, 3).map((item, index) => (
              <li key={index} className={index === 2 ? "opacity-40" : ""}>
                • {item}
              </li>
            ))}
          </ul>

          {/* VIEW MORE */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="mt-6 text-orange-500 font-semibold hover:underline">
                View More
              </button>
            </SheetTrigger>

            <SheetContent side="bottom" className="h-[70vh]">
              <SheetHeader>
                <SheetTitle>Things To Carry</SheetTitle>
              </SheetHeader>

              <ul className="mt-6 space-y-4 text-gray-700 overflow-y-auto pr-2">
                {thingsToCarry.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* ---------------- Policies Accordions ---------------- */}
        <Accordion type="single" collapsible className="space-y-6">

          <PolicyItem
            value="refund"
            title="Refund Policy"
            content="Refunds will be processed within 7-10 working days after cancellation approval. Certain service charges may apply depending on booking type."
          />

          <PolicyItem
            value="cancellation"
            title="Cancellation Policy"
            content="Cancellation requests must be made at least 72 hours before departure. Partial refunds may apply depending on the stage of booking."
          />

          <PolicyItem
            value="payment"
            title="Payment Policy"
            content="A minimum of 50% advance payment is required to confirm booking. Full payment must be completed before departure."
          />

        </Accordion>

      </div>
    </section>
  );
}

/* ---------------- Policy Item Component ---------------- */

interface PolicyItemProps {
  value: string;
  title: string;
  content: string;
}

function PolicyItem({ value, title, content }: PolicyItemProps) {
  return (
    <AccordionItem
      value={value}
      className="border rounded-2xl bg-white px-6"
    >
      <AccordionTrigger className="py-6 hover:no-underline group">
        <div className="flex items-center justify-between w-full">
          <span className="text-xl font-semibold">
            {title}
          </span>

        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-6 text-gray-600">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
}