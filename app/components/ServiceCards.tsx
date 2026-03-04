import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Trips",
    image: "/assets/all-trips.jpg",
  },
  {
    title: "Treks",
    image: "/assets/all-trips.jpg",
  },
  {
    title: "Visas",
    image: "/assets/all-trips.jpg",
  },
];

export default function ServiceCards() {
  return (
    <section className="w-full py-8">

      <div className="max-container">
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="
                relative
                h-35 sm:h-40  lg:h-45
                rounded-2xl
                overflow-hidden
                group
                cursor-pointer
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Title */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                "
              >
                <h3
                  className="
                    text-white
                    font-semibold
                    text-2xl sm:text-3xl md:text-4xl
                    tracking-wide
                  "
                >
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}