"use client";

import Image from "next/image";
import Link from "next/link";
import AllVisasGrid from "../components/global/Allvisas";

export default function VisaHero() {
  return (
    <main>
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img-1.jpg" 
          alt="Visa Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
          Get Your VISA
        </h1>

        <Link
          href="/visa-destinations"
          className="
            inline-block
            bg-orange-500
            hover:bg-orange-600
            text-white
            font-medium
            px-8
            py-4
            rounded-xl
            transition
          "
        >
          Search Destinations
        </Link>

      </div>
    </section>
    <AllVisasGrid />
    </main>

);

}