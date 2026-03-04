"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useState } from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationsSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Domestic", "International"];

  const cards = [
    { title: "Bali", tours: "01 Tours", image: "/assets/img-2.jpeg" },
    { title: "Dubai", tours: "03 Tours", image: "/assets/img-2.jpeg" },
    { title: "Thailand", tours: "05 Tours", image: "/assets/img-2.jpeg" },
    { title: "Singapore", tours: "02 Tours", image: "/assets/img-2.jpeg" },
    { title: "Maldives", tours: "04 Tours", image: "/assets/img-2.jpeg" },
    { title: "Paris", tours: "02 Tours", image: "/assets/img-2.jpeg" },
  ];

  return (
    <section className="w-full max-container mx-auto py-12">

      {/* Heading */}
      <div className="flex flex-col gap-5 mb-8">

        <h2 className="text-3xl font-semibold">
          Destinations
        </h2>

        {/* Filter Pills */}
        <div className="flex gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`
                px-5 py-2
                rounded-full
                text-sm
                border
                transition
                ${
                  activeFilter === item
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Embla Slider */}
      <div className="" ref={emblaRef}>
        <div className="flex gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                flex-[0_0_80%]
                sm:flex-[0_0_45%]
                md:flex-[0_0_30%]
                lg:flex-[0_0_22%]
              "
            >
              <DestinationCard {...card} />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}