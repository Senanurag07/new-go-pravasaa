"use client";

import Image from "next/image";
import { Instagram, Users } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="relative w-full h-[720px] overflow-hidden">

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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 px-6">

        <div
          className="
          bg-white/15 backdrop-blur-md
          border border-white/20
          rounded-2xl
          px-10 py-6
          flex items-center
          gap-10
          text-white
        "
        >

          {/* Reviews */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <FcGoogle size={20} />
            </div>
            <div>
              <p className="font-semibold">800+</p>
              <p className="text-white/70 text-sm">Google Reviews</p>
            </div>
          </div>

          <div className="w-px h-8 bg-white/30" />

          {/* Followers */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <Instagram className="text-pink-500" size={20} />
            </div>
            <div>
              <p className="font-semibold">97.5K</p>
              <p className="text-white/70 text-sm">Followers</p>
            </div>
          </div>

          <div className="w-px h-8 bg-white/30" />

          {/* Customers */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <Users className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="font-semibold">4500+</p>
              <p className="text-white/70 text-sm">Happy Customer</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}