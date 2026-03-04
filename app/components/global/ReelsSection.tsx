"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface Reel {
  id: number;
  video: string;
}

const reels: Reel[] = [
  { id: 1, video: "/assets/reel.mp4" },
  { id: 2, video: "/assets/reel.mp4" },
  { id: 3, video: "/assets/reel.mp4" },
  { id: 4, video: "/assets/reel.mp4" },
  { id: 4, video: "/assets/reel.mp4" },{ id: 5, video: "/assets/reel.mp4" },{ id: 6 , video: "/assets/reel.mp4" },
];

export default function ReelsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  /* ---------- Slide Change ---------- */

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);

      videoRefs.current.forEach((video, i) => {
        if (!video) return;

        if (i === index) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  /* ---------- Auto Next ---------- */

  const handleVideoEnd = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  /* ---------- Wheel Scroll (FIXED) ---------- */

  useEffect(() => {
    if (!emblaApi || !containerRef.current) return;

    const onWheel = (e: WheelEvent) => {
      // Allow normal vertical page scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;

      // Only control carousel if horizontal gesture
      e.preventDefault();

      if (e.deltaX > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };

    const node = containerRef.current;
    node.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      node.removeEventListener("wheel", onWheel);
    };
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#e8d9d2] py-20">
      <div className="max-container">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
          Journey in Frames
        </h2>

        <div ref={containerRef} className="">
          <div ref={emblaRef}>
            <div className="flex gap-8">

              {reels.map((reel, index) => (
                <div
                  key={reel.id}
                  className="flex-none w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <ReelCard
                    video={reel.video}
                    index={index}
                    videoRefs={videoRefs}
                    onEnd={handleVideoEnd}
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Reel Card ---------------- */

interface ReelCardProps {
  video: string;
  index: number;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  onEnd: () => void;
}

function ReelCard({ video, index, videoRefs, onEnd }: ReelCardProps) {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showCenterIcon, setShowCenterIcon] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }

    setShowCenterIcon(true);

    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setShowCenterIcon(false);
    }, 1000);
  };

  const toggleSound = () => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-black">

      <div className="relative aspect-[9/16]">

        <video
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={video}
          muted
          playsInline
          onEnded={onEnd}
          className="w-full h-full object-cover"
          onClick={togglePlay}
        />

        {/* Center Play Pause */}
        {showCenterIcon && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/60 text-white rounded-full p-6 backdrop-blur">
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </div>
          </div>
        )}

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="absolute bottom-4 right-4 bg-black/60 text-white rounded-full p-3 backdrop-blur hover:bg-black/80 transition"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

      </div>
    </div>
  );
}