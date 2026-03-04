"use client";

import Image from "next/image";
import { Instagram, Users } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="relative w-full h-160 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-img.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

        <p className="text-white text-lg tracking-wide mb-2">
          Go – Pravasas No.1
        </p>

        <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          Travel Agency In Bangalore
        </h1>

        {/* CTA */}
        <button
          className="
          mt-8
          bg-orange-500 hover:bg-orange-600
          text-white px-10 py-4
          rounded-xl text-lg font-medium
          transition
        "
        >
          Plan Your Journey
        </button>
      </div>

      {/* Bottom Stats Container */}
 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 w-full max-w-md">

  <div
    className="
    bg-white/30 backdrop-blur-lg
    border border-white/30
    rounded-xl
    px-4 py-3
    flex flex-wrap justify-center items-center
    gap-5
    text-white
  "
  >

    {/* Reviews */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
        <FcGoogle size={16} />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold">800+</p>
        <p className="text-white/80 text-xs">Reviews</p>
      </div>
    </div>

    {/* Followers */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
        <Instagram className="text-pink-500" size={16} />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold">97.5K</p>
        <p className="text-white/80 text-xs">Followers</p>
      </div>
    </div>

    {/* Customers */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
        <Users className="text-blue-500" size={16} />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold">4500+</p>
        <p className="text-white/80 text-xs">Customers</p>
      </div>
    </div>

  </div>
</div>

    </section>
  );
}