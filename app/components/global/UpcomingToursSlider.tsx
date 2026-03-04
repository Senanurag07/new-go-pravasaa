"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PackageCard from "../PackageCard";

export default function UpcomingToursSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      dragFree: false,
    },
    [WheelGesturesPlugin()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const cards = [1, 2, 3, 4, 5];

  const filters = ["All", "Feb 2026", "Mar 2026", "Apr 2026"];

  return (
    <section className="relative w-full max-container mx-auto ">

      {/* Heading */}
      <div className="flex flex-col gap-6 mb-10">

  {/* Heading */}
  <h2 className="text-3xl font-semibold">
    Upcoming Tours
  </h2>

  {/* Filter Pills */}
  <div className="flex justify-center">
    <div className="flex flex-wrap gap-3">

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

</div>

      {/* Left Button */}
      <button
        onClick={scrollPrev}
        className="
        absolute left-0 top-[60%] -translate-y-1/2
        z-20
        w-10 h-10
        rounded-full
        bg-white shadow-md
        flex items-center justify-center
        hover:scale-110 transition
      "
      >
        <ChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollNext}
        className="
        absolute right-0 top-[60%] -translate-y-1/2
        z-20
        w-10 h-10
        rounded-full
        bg-orange-500 text-white shadow-md
        flex items-center justify-center
        hover:scale-110 transition
      "
      >
        <ChevronRight />
      </button>

      {/* Embla */}
      <div className="overflow-hidden px-12" ref={emblaRef}>
        <div className="flex items-center py-10">

          {cards.map((_, index) => {
            const isCenter = index === selectedIndex;

            return (
              <div key={index} className="flex-[0_0_35%] px-4">
                <div
                  className={`
                    transition-all duration-500 ease-out
                    ${isCenter ? "scale-110" : "scale-90 opacity-70"}
                  `}
                >
                  <PackageCard />
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}