"use client";
import React, { useState, useEffect } from "react";
import { FocusCards } from "@/components/ui/parallax-scroll";
import { LinkPreview } from "@/components/ui/link-preview";

type Media = {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  timestamp: string;
};

export default function InstagramMedia() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Use environment variables
  const IG_USER_ID = process.env.NEXT_PUBLIC_IG_USER_ID;
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  useEffect(() => {
    async function fetchInstagramMedia() {
      const INSTAGRAM_API_URL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${ACCESS_TOKEN}`;
      // const INSTAGRAM_API_URL = `https://graph.instagram.com/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,timestamp&access_token=${ACCESS_TOKEN}`;
      try {
        const response = await fetch(INSTAGRAM_API_URL);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error ${response.status}: ${errorData.error.message}`);
        }

        const data = await response.json();
        setMedia(data.data || []);
        console.log('insta api data', response);

      } catch (error) {
        console.error("Error fetching Instagram media:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramMedia();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner"></div>
        <style jsx>{`
          .spinner {
            width: 64px;
            height: 64px;
            border: 8px solid #e5e7eb; /* Light gray */
            border-top: 8px solid #3b82f6; /* Blue */
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }
  
  if (error || media.length === 0) {
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
              imageSrc="/images/Hero/Hero1.jpg"
              className="font-bold"
            >
              Instagram
            </LinkPreview>{" "}
            or{" "}
            <LinkPreview 
              url="https://www.linkedin.com/in/anjali-bhutani/"
              isStatic={true}
              imageSrc="/images/Hero/Hero6.jpg"
              className="font-bold"
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
