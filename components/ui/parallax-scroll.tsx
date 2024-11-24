"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Media = {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  timestamp: string;
};

export const Card = React.memo(
    ({
      card,
      index,
      hovered,
      setHovered,
    }: {
      card: Media;
      index: number;
      hovered: number | null;
      setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-70 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {card.media_type === "IMAGE" || card.media_type === "CAROUSEL_ALBUM" ? (
          <img
            src={card.media_url}
            alt={card.caption || "Instagram Media"}
            className="object-top md:object-cover absolute inset-0 w-full h-full"
          />
        ) : card.media_type === "VIDEO" ? (
          <video
            autoPlay
            muted
            loop
            className="object-cover absolute inset-0 w-full h-full"
          >
            <source src={card.media_url} type="video/mp4" />
          </video>
        ) : null}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-sm md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.caption?.split("\n")[0] || "No Caption"}
          </div>
        </div>
      </div>
    )
  );
Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Media[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full my-10">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
