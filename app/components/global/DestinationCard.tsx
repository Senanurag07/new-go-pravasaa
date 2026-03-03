import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DestinationCard({
  title = "Bali",
  tours = "01 Tours",
  image = "/assets/img-2.jpeg",
}) {
  return (
    <div
      className="
        relative
        w-full max-w-[260px]
        h-[340px]
        rounded-3xl
        overflow-hidden
        group
        cursor-pointer
      "
    >

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Bottom Info Pill */}
      <div
        className="
          absolute bottom-3 left-3 right-3
          bg-white
          rounded-2xl
          px-4 py-3
          flex items-center justify-between
          shadow-md
        "
      >
        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            {tours}
          </p>
        </div>

        {/* Arrow Button */}
        <div
          className="
            w-10 h-10
            bg-orange-100
            rounded-full
            flex items-center justify-center
            text-orange-500
            group-hover:bg-orange-500
            group-hover:text-white
            transition
          "
        >
          <ArrowUpRight size={18} />
        </div>

      </div>
    </div>
  );
}