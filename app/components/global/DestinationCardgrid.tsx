"use client";

import PackageCard from "../PackageCard";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function PackagesGrid() {
  const packages = new Array(8).fill(null);

  return (
    <section className="w-full bg-gray-50 py-12">

      <div className="max-container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          All Dubai Tour Package from Bangalore Trips
        </h2>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
          "
        >
          {packages.map((_, index) => (
            <PackageCard key={index} />
          ))}
        </div>

        {/* Bottom Info Box */}
        <div
          className="
            mt-14
            border
            border-gray-300
            rounded-2xl
            bg-[#f3ebe6]
            p-6 md:p-8
          "
        >
          <h3 className="text-2xl font-semibold mb-3">
            Dubai Tour Package from Bangalore
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Embark on a journey through Dubai’s stunning landscapes and vibrant
            cityscapes. From the iconic Burj Khalifa to the bustling souks,
            each stop offers a unique blend of luxury and tradition.
          </p>

          {/* View More Popup Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="mt-4 text-orange-500 font-semibold hover:underline">
                View More
              </button>
            </SheetTrigger>

            {/* Bottom Popup */}
            <SheetContent side="bottom" className="rounded-t-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Dubai Tour Package from Bangalore
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Dubai is a dazzling destination where futuristic skyscrapers,
                luxury shopping, and desert adventures come together. Visit the
                breathtaking Burj Khalifa, explore the vibrant souks, enjoy
                thrilling desert safaris, and relax on pristine beaches.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                Our Dubai tour packages from Bangalore are designed to provide
                a seamless and unforgettable travel experience. From flights
                and hotels to guided sightseeing and exciting activities,
                everything is carefully arranged so you can focus on enjoying
                your journey.
              </p>

            </SheetContent>
          </Sheet>

        </div>

      </div>

    </section>
  );
}