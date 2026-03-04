"use client";

import DestinationCard from "./DestinationCard";


export default function AllVisasGrid() {
  const visas = new Array(20).fill(null);

  return (
    <section className="w-full bg-gray-50 py-12">

      <div className="max-container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          All Visas
        </h2>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8
            justify-items-center
          "
        >
          {visas.map((_, index) => (
            <DestinationCard
              key={index}
              title="Dubai"
              tours="Get On 08 Feb"
              image="/assets/hero-img.jpg"
            />
          ))}
        </div>

      </div>

    </section>
  );
}