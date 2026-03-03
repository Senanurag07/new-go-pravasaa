"use client";

import Image from "next/image";
import {
  PhoneCall,
  Clock,
  Plane,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function PackageCard() {

  // Images for slider
  const images = [
    "/assets/we.jpg",
    "/assets/we2.jpg",
    "/assets/we3.jpg",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="
        w-full max-w-sm
        bg-white
        rounded-3xl
        shadow-lg
        overflow-hidden
      "
    >

      {/* Image Slider */}
      <div
        className="
          relative h-[220px] w-full
          rounded-3xl
          overflow-hidden
        "
      >
        <Image
          src={images[index]}
          alt="Package Image"
          fill
          className="object-cover"
          priority
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            bg-white w-9 h-9
            rounded-full flex items-center justify-center
            shadow
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            bg-white w-9 h-9
            rounded-full flex items-center justify-center
            shadow
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>6 Days & 5 nights</span>
          </div>

          <div className="flex items-center gap-1">
            <Plane size={16} />
            <span>With Flight</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug">
          Delightful Malaysia & Singapore
        </h3>

 <div className="flex flex-wrap gap-2 text-xs">
  <span className="border rounded-full px-2.5 py-0.5">
    <span className="text-orange-500 font-medium">2D</span> Singapore -{" "}
    <span className="text-orange-500 font-medium">2D</span> Singapore -{" "}
    <span className="text-orange-500 font-medium">2D</span> Singapore
    <span className="text-orange-500 font-medium ml-1">+3</span>
  </span>
</div>

        {/* Price Row */}
        <div className="flex items-center justify-between">
          <div>
          <div className="flex gap-1 items-center">
  <p>Price</p>

  {/* Old Price */}
  <div className="relative inline-block">
    <p className="text-sm text-gray-400">
      RS. 42,000/pp
    </p>

    {/* Orange Diagonal Line */}
    <span
      className="
        absolute left-0 top-1/2
        w-full h-0.5
        bg-orange-500
        rotate-[-8deg]
        -translate-y-1/2
        pointer-events-none
      "
    />
  </div>
</div>

            <p className="text-3xl font-bold">
              RS. 30,000<span className="text-base font-normal">/pp</span>
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            15 Seats Left
          </span>
        </div>

        {/* Dates */}
      <div
  className="
    relative
    flex items-center justify-between
    px-3 py-3
    text-sm
    overflow-hidden
  "
>
  {/* Top Gradient Background */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-orange-100
      to-transparent
      pointer-events-none
    "
  />

  <div className="relative flex items-center gap-2">
    <Calendar size={16} />
    <span>Feb 06, Feb 11...</span>
  </div>

  <span className="relative text-orange-500 font-medium">
    +5 More
  </span>
</div>

        {/* CTA */}
        <div className="flex gap-2 pt-2">
          <button
            className="
              w-12 h-12
              rounded-xl
              border border-orange-500
              flex items-center justify-center
              text-orange-500
            "
          >
            <PhoneCall />
          </button>

          <button
            className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              rounded-xl
              font-medium
              text-lg
              transition
            "
          >
            Request a Callback
          </button>
        </div>

      </div>
    </div>
  );
}