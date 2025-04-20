"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FocusCards } from "@/components/ui/parallax-scroll";
import { LinkPreview } from "@/components/ui/link-preview";

type Media = {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  timestamp: string;
};

// Cache implementation
const cache = new Map<string, { data: Media[]; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export default function InstagramMedia() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  const fetchInstagramMedia = useCallback(async () => {
    const cacheKey = 'instagram-media';
    const cachedData = cache.get(cacheKey);
    
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      setMedia(cachedData.data);
      setLoading(false);
      return;
    }

    try {
      const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp&access_token=${ACCESS_TOKEN}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.error.message}`);
      }
      
      const data = await response.json();
      
      // Cache the new data
      cache.set(cacheKey, {
        data: data.data,
        timestamp: Date.now()
      });

      setMedia(data.data);
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [ACCESS_TOKEN]);

  useEffect(() => {
    fetchInstagramMedia();
  }, [fetchInstagramMedia]);

  if (loading && media.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-300 text-sm">Loading Anjali's Makeup Gallery...</p>
        </div>
      </div>
    );
  }

  if (error && media.length === 0) {
    return (
      <div className="flex flex-col max-h-screen bg-black items-center justify-center">
        <div className="flex justify-center items-center h-[40rem] flex-col px-4">
          <p className="text-neutral-500 dark:text-white text-xl md:text-3xl max-w-3xl mx-auto mb-10 font-bold">
            Oops! Something went wrong.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
            While we fix this, why not check out Anjali's stunning work on{" "}
            <LinkPreview
              url="https://www.instagram.com/hairandmakeupbyanjali/"
              isStatic={true}
              imageSrc="/images/Hero/Hero1-min.jpg"
              className="font-bold text-white"
            >
              Instagram
            </LinkPreview>{" "}
            or{" "}
            <LinkPreview
              url="https://www.linkedin.com/in/anjali-bhutani/"
              isStatic={true}
              imageSrc="/images/Hero/Hero6-min.jpg"
              className="font-bold text-white"
            >
              LinkedIn
            </LinkPreview>?
          </p>
        </div>
      </div>
    );
  }

  return <FocusCards cards={media} />;
}
