"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "We offer domestic and international tour packages including honeymoon trips, adventure tours, family vacations, corporate travel, and customized travel plans tailored to your preferences.",
    },
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "Our team provides fully customizable packages with flexible itineraries, premium stays, transport, and guided experiences.",
    },
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "We cover destinations across Asia, Europe, the Middle East, and more with visa assistance and complete travel support.",
    },
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "Yes, we provide 24/7 customer support throughout your trip for a smooth experience.",
    },
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "You can contact us via phone, WhatsApp, or website inquiry form to get a customized quotation.",
    },
    {
      question: "What kinds of travel packages does Go Pravasa offer?",
      answer:
        "We also offer group tours and corporate travel solutions with special pricing.",
    },
  ];

  return (
    <section className="w-full max-container rounded-2xl py-16 md:py-24">
      <div className=" mx-auto ">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-10 md:mb-14">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-neutral-300 px-6 md:px-8"
            >
              <AccordionTrigger
                className="
                  text-left
                  text-base md:text-lg
                  font-medium
                  py-5
                  hover:no-underline
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  text-sm md:text-base
                  text-neutral-600
                  pb-6
                  leading-relaxed
                "
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}