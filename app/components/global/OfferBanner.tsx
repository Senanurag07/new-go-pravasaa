"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const banners = [
  "/assets/img-1.jpg",
  "/assets/img-2.jpeg",
  "/assets/img-1.jpg",
];

export default function OfferBanner() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay.current]
  );

  return (
    <section className="w-full py-10 overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((img, index) => (
            <div
              key={index}
              className="
                flex-none
                w-full
                sm:w-4/5
                md:w-3/4
                lg:w-4/5
                h-52
                sm:h-60
                md:h-72
                lg:h-80
                pl-0 sm:pl-6
              "
            >
              <div className="relative w-full h-full rounded-none sm:rounded-3xl overflow-hidden">
                <Image
                  src={img}
                  alt="Offer Banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}