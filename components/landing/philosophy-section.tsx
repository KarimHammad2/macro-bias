"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const philosophyItems = [
  {
    src: "/philosophy-split-1.png",
    title: "Gaussian Distribution",
    description:
      "Diverse & wide-ranging expertise with strong predictive capabilities.",
  },
  {
    src: "/philosophy-split-2.png",
    title: "Eagle",
    description:
      "Carefully curated investment strategies create financial freedom.",
  },
  {
    src: "/philosophy-split-3.png",
    title: "Crown",
    description:
      "Gauss was named Prince of Mathematics, resembling excellence and reputation.",
  },
];

function usePhilosophyScrollProgress(sectionRef: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const innerHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      const sectionHeight = rect.height;
      const scrolled = innerHeight - rect.top;
      const total = innerHeight + sectionHeight;
      const raw = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScrollOrResize = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef]);

  return progress;
}

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = usePhilosophyScrollProgress(sectionRef);

  const mergeFactor = progress < 0.35 ? 0 : progress > 0.65 ? 1 : (progress - 0.35) / 0.3;
  const threeOpacity = progress < 0.5 ? 1 : progress > 0.65 ? 0 : 1 - (progress - 0.5) / 0.15;
  const combinedOpacity = progress < 0.45 ? 0 : progress > 0.65 ? 1 : (progress - 0.45) / 0.2;
  const textOpacity = progress < 0.4 ? 1 : progress > 0.6 ? 0 : 1 - (progress - 0.4) / 0.2;

  const getColumnStyle = (index: number) => {
    const transition = "transform 0.15s ease-out, opacity 0.2s ease-out";
    let translateX = "0";
    if (index === 0) translateX = `${mergeFactor * 33}%`;
    if (index === 2) translateX = `${-mergeFactor * 33}%`;
    return {
      transform: `translateX(${translateX})`,
      opacity: threeOpacity,
      transition,
    };
  };

  return (
    <section ref={sectionRef} className="bg-[#030712] py-32">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
          The Philosophy <span className="font-serif italic text-[#60a5fa]">behind</span> Gauss
        </h2>

        <div className="relative min-h-[280px]">
          <div
            className="grid grid-cols-1 gap-12 md:grid-cols-3"
            style={{ transition: "opacity 0.2s ease-out" }}
          >
            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-left"
                style={getColumnStyle(index)}
              >
                <div className="relative mb-6 h-32 w-full max-w-[200px] shrink-0">
                  <Image
                    src={item.src}
                    alt=""
                    width={200}
                    height={128}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="mb-3 w-full text-xl font-semibold text-white"
                  style={{ opacity: textOpacity, transition: "opacity 0.2s ease-out" }}
                >
                  {item.title}
                </h3>
                <p
                  className="w-full leading-relaxed text-slate-400"
                  style={{ opacity: textOpacity, transition: "opacity 0.2s ease-out" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="absolute left-1/2 top-0 flex w-full -translate-x-1/2 justify-center md:top-0"
            style={{
              opacity: combinedOpacity,
              transition: "opacity 0.2s ease-out",
              pointerEvents: combinedOpacity > 0.5 ? "auto" : "none",
            }}
          >
            <div className="relative h-40 w-48 shrink-0 md:h-48 md:w-60">
              <Image
                src="/logo.png"
                alt=""
                width={240}
                height={192}
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
