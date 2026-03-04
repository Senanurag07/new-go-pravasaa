"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import PackageCard from "../PackageCard";

export default function TopSellingPackages() {

  const [activeTab, setActiveTab] = useState("Trips");

  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  const packages = new Array(8).fill(null);

  return (
    <section className="w-full bg-gray-50 py-14">

      <div className="max-container mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Top Selling Packages
          </h2>

          {/* Trips / Treks Toggle */}
          <div
            className="
              flex
              border border-orange-500
              rounded-full
              overflow-hidden
            "
          >
            <button
              onClick={() => setActiveTab("Trips")}
              className={`
                px-6 py-2 font-medium transition
                ${
                  activeTab === "Trips"
                    ? "bg-orange-500 text-white"
                    : "text-orange-500"
                }
              `}
            >
              Trips
            </button>

            <button
              onClick={() => setActiveTab("Treks")}
              className={`
                px-6 py-2 font-medium transition
                ${
                  activeTab === "Treks"
                    ? "bg-orange-500 text-white"
                    : "text-orange-500"
                }
              `}
            >
              Treks
            </button>
          </div>

        </div>

        {/* Slider */}
        <div className="" ref={emblaRef}>
          <div className="flex gap-8">

            {packages.map((_, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_90%]
                  sm:flex-[0_0_48%]
                  md:flex-[0_0_40%]
                  lg:flex-[0_0_30%]
                "
              >
                <PackageCard />
              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
}