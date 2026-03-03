"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = new Array(7).fill(
    "What kinds of travel packages does Go Pravasa offer?"
  );

  return (
    <section className="w-full bg-neutral-100 py-20">
      <div className="max-container">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl md:text-4xl font-semibold">
            FAQ
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            At Go Pravasa, we’re committed to providing stress-free travel
            experiences with a focus on comfort, safety, and convenience.
            Here’s what sets us apart:
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10" />

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                border
                border-gray-300
                rounded-xl
                bg-white
                px-6
              "
            >
              <AccordionTrigger className="text-left font-medium text-base md:text-lg">
                {question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                We offer customized travel packages including adventure tours,
                honeymoon packages, luxury trips, family vacations, and
                international holiday experiences tailored to your needs.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}