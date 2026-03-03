 "use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/all-trips.jpg",
  "/assets/all-treks.jpg",
  "/assets/hero-img.jpeg",
];

export default function VisaGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <section className="w-full mt-16">
      <div className="max-container">

        {/* Outer Card */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">

          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            Gallary :
          </h3>

          {/* Embla Wrapper */}
          <div className="relative">

            <div ref={emblaRef} className="overflow-hidden rounded-3xl">
              <div className="flex">

                {images.map((img, index) => (
                  <div
                    key={index}
                    className="
                      flex-none
                      w-full
                    "
                  >
                    <div className="relative w-full h-60 sm:h-76 md:h-92 lg:h-110">

                      <Image
                        src={img}
                        alt="Dubai Gallery"
                        fill
                        priority={index === 0}
                        className="object-cover rounded-3xl"
                      />

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                bg-white
                shadow-md
                rounded-full
                w-12 h-12
                flex items-center justify-center
                hover:bg-neutral-100
                transition
                disabled:opacity-40
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                bg-white
                shadow-md
                rounded-full
                w-12 h-12
                flex items-center justify-center
                hover:bg-neutral-100
                transition
                disabled:opacity-40
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}