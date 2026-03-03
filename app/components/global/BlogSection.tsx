"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

interface Blog {
  id: number;
  title: string;
  date: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title:
      "Likir Monastery Ladakh: History, Festivals & Complete Visitor Guide",
    date: "Feb 06, 2026",
    image: "/assets/img-1.jpg",
  },
  {
    id: 2,
    title:
      "Likir Monastery Ladakh: History, Festivals & Complete Visitor Guide",
    date: "Feb 06, 2026",
    image: "/assets/img-1.jpg",
  },
  {
    id: 3,
    title:
      "Likir Monastery Ladakh: History, Festivals & Complete Visitor Guide",
    date: "Feb 06, 2026",
    image: "/assets/img-1.jpg",
  },
];

export default function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full bg-neutral-100 py-20">
      <div className="max-container">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Blogs
          </h2>

          <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
            View All
          </button>
        </div>

        {/* Embla */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-8">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="
                  flex-none
                  w-full
                  sm:w-4/5
                  md:w-2/3
                  lg:w-1/3
                "
              >
                <BlogCard blog={blog} />
              </div>
            ))}

          </div>
        </div>

        {/* Pagination Indicator */}
        <div className="flex justify-center mt-10">
          <div className="w-24 h-1 bg-neutral-300 rounded-full relative">
            <div
              className="absolute top-0 h-1 w-8 bg-orange-500 rounded-full transition-all"
              style={{
                left: `${selectedIndex * 33}%`,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="relative rounded-3xl overflow-hidden group">

      {/* Image */}
      <div className="relative h-80 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-6 left-6 right-6 text-white">

          <span className="bg-white text-black text-xs font-medium px-4 py-1 rounded-full inline-block mb-4">
            {blog.date}
          </span>

          <h3 className="text-lg md:text-xl font-semibold leading-snug">
            {blog.title}
          </h3>

        </div>
      </div>

    </div>
  );
}