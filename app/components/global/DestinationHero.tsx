"use client";

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";

export default function DestinationHero() {
  return (
    <section className="relative w-full h-160 md:h-162 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/hero-img.jpg"
        alt="Dubai Skyline"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">

        {/* Left Content */}
        <div className="max-w-xl">

          <h1 className="text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
            Dubai Tour Package From
            <br />
            Bangalore
          </h1>

          <p className="text-gray-200 mt-4 text-lg leading-relaxed">
            Discover the magic of Dubai with our expertly curated Dubai
            tour packages from Bangalore.
          </p>

          <button
            className="
              mt-6
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-7 py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            Request a Callback
          </button>
        </div>

        {/* Stats Card */}
    {/* Stats Card */}
<div
  className="
    absolute
    bottom-6
    left-1/2 -translate-x-1/2
    md:left-auto md:translate-x-0 md:right-10
    backdrop-blur-md
    bg-white/10
    border border-white/20
    rounded-xl
    px-4 py-3
    flex items-center
    gap-4 md:gap-8
    shadow-xl
    w-[92%] md:w-auto
    max-w-md
  "
>

  {/* Google */}
  <div className="flex items-center gap-2 md:gap-3 text-white">

    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
      <FaGoogle className="text-[#EA4335]" size={14} />
    </div>

    <div>
      <p className="font-semibold text-sm md:text-lg">800+</p>
      <p className="text-xs md:text-sm text-gray-200">Reviews</p>
    </div>

  </div>

  {/* Instagram */}
  <div className="flex items-center gap-2 md:gap-3 text-white">

    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
      <FaInstagram className="text-pink-500" size={14} />
    </div>

    <div>
      <p className="font-semibold text-sm md:text-lg">97.5K</p>
      <p className="text-xs md:text-sm text-gray-200">Followers</p>
    </div>

  </div>

  {/* Customers */}
  <div className="flex items-center gap-2 md:gap-3 text-white">

    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
      <HiOutlineUsers className="text-orange-500" size={16} />
    </div>

    <div>
      <p className="font-semibold text-sm md:text-lg">4500+</p>
      <p className="text-xs md:text-sm text-gray-200">Happy</p>
    </div>

  </div>

</div>

      </div>

    </section>
  );
}