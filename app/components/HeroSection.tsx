import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-img.jpg"   // <-- place image in /public
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

        <h1
          className="
            text-white font-bold leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            max-w-4xl
          "
        >
          Travel Agency In Bangalore
        </h1>

        {/* CTA Button */}
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

        {/* Stats Card */}
        <div
          className="
            mt-16
            bg-white/15 backdrop-blur-md
            border border-white/20
            rounded-2xl
            px-8 py-4
            flex flex-col sm:flex-row
            gap-6
          "
        >

          {/* Reviews */}
          <div className="flex items-center gap-3">
            <span className="text-xl">⭐</span>
            <div>
              <p className="text-white font-semibold">800+</p>
              <p className="text-white/70 text-sm">Reviews</p>
            </div>
          </div>

          {/* Followers */}
          <div className="flex items-center gap-3">
            <span className="text-xl">📸</span>
            <div>
              <p className="text-white font-semibold">97.5K</p>
              <p className="text-white/70 text-sm">Followers</p>
            </div>
          </div>

          {/* Customers */}
          <div className="flex items-center gap-3">
            <span className="text-xl">😊</span>
            <div>
              <p className="text-white font-semibold">4500+</p>
              <p className="text-white/70 text-sm">Happy Customer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}