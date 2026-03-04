"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

const images = [
  "/assets/img-1.jpg",
  "/assets/img-2.jpeg",
  "/assets/img-4.jpg",
  "/assets/img-4.jpg",
  "/assets/img-5.jpg",
];

export default function ProductGallery() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: true,
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "x",
      }),
    ]
  );

  return (
    <section className="w-full max-container  py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-[0_0_28%] md:flex-[0_0_22%] h-85 rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`gallery-${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 25vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}