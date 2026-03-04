"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ------------------ Types ------------------ */

interface Review {
  id: number;
  text: string;
  name: string;
  subtitle: string;
  rating: number;
  avatar: string;
  images: string[];
}

interface ReviewCardProps {
  review: Review;
}

/* ------------------ Data ------------------ */

const reviews: Review[] = [
  {
    id: 1,
    text: "Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smoot Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smoothDream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smoothDream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smoothDream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smooth. Anurag sen",
    name: "Andrew Fetcher",
    subtitle: "Vietnam Tour package",
    rating: 5,
    avatar: "/assets/team-img.jpg",
    images: ["/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg"],
  },
  {
    id: 2,
    text: "Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and the staff was very helpful.",
    name: "Andrew Fetcher",
    subtitle: "Vietnam Tour package",
    rating: 5,
    avatar: "/assets/team-img.jpg",
    images: ["/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg"],
  },
  {
    id: 3,
    text: "Amazing experience! Everything was well organized and professional.",
    name: "John Doe",
    subtitle: "Bali Tour Package",
    rating: 4,
    avatar: "/assets/avatar.jpg",
    images: ["/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg"],
  },
    {
    id: 4,
    text: "Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smooth.",
    name: "Andrew Fetcher",
    subtitle: "Vietnam Tour package",
    rating: 5,
    avatar: "/assets/avatar.jpg",
    images: ["/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg"],
  },
    {
    id: 5,
    text: "Dream Tours is the only way to go. We had the time of our life on our trip to the Ark. The customer service was wonderful, and everything was smooth.",
    name: "Andrew Fetcher",
    subtitle: "Vietnam Tour package",
    rating: 5,
    avatar: "/assets/avatar.jpg",
    images: ["/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg", "/assets/img-1.jpg"],
  },
];

/* ------------------ Section ------------------ */

export default function ReviewsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: false,
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "x", // converts vertical wheel to horizontal
      }),
    ]
  );

  return (
    <section className="w-full bg-[#F6F8F8] py-12 ">
      <div className="w-full">
        <h2 className="text-3xl  md:text-4xl font-semibold text-center mb-12">
          Our Reviews
        </h2>

        {/* Embla */}
        <div ref={emblaRef} className="max-container">
          <div className="flex gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-none w-full sm:w-4/5 md:w-2/3 lg:w-1/2"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Card ------------------ */

function ReviewCard({ review }: ReviewCardProps) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (el.scrollHeight > el.clientHeight) {
      setShowReadMore(true);
    }
  }, []);

return (
  <div className="bg-white rounded-3xl p-6 shadow-sm h-84 flex flex-col">

    {/* Text Section */}
    <div className="flex-1 text-gray-600 text-sm leading-relaxed mb-4">
      <p ref={textRef} className="line-clamp-3">
        {review.text}
      </p>

      {showReadMore && (
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-orange-500 font-medium mt-1">
              Readmore
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-lg">
            {/* header: avatar + name on left, rating on right */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-lg">
                <Star className="text-yellow-400" size={16} />
                <span className="font-semibold">
                  {review.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 mb-2" />

            <p className="text-gray-700 leading-relaxed">
              {review.text}
            </p>
          </DialogContent>
        </Dialog>
      )}
    </div>

    {/* Review Images */}
    <div className="grid grid-cols-5 gap-3 mb-4">
      {review.images.map((img, index) => (
        <div
          key={index}
          className="relative h-20 rounded-xl overflow-hidden"
        >
          <Image src={img} alt="review" fill className="object-cover" />
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 mb-4" />

    {/* Bottom User Section */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={review.avatar}
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-semibold text-lg">{review.name}</h4>
          <p className="text-gray-500 text-sm">{review.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-lg">
        <Star className="text-yellow-400" size={16} />
        <span className="font-semibold">
          {review.rating.toFixed(1)}
        </span>
      </div>
    </div>

  </div>
);
}