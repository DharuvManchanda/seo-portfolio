"use client";
import React, { useState, useEffect } from "react";
import { FocusCards } from "@/components/ui/parallax-scroll";

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

 // Use environment variables
 const IG_USER_ID = process.env.NEXT_PUBLIC_IG_USER_ID;
 const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  useEffect(() => {
    async function fetchInstagramMedia() {
      const INSTAGRAM_API_URL = `https://graph.instagram.com/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,timestamp&access_token=${ACCESS_TOKEN}`;
      try {
        const response = await fetch(INSTAGRAM_API_URL);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error ${response.status}: ${errorData.error.message}`);
        }

        const data = await response.json();
        setMedia(data.data || []);
      } catch (error) {
        console.error("Error fetching Instagram media:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramMedia();
  }, []);

  if (!loading) {
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
  
  return <FocusCards cards={media} />;
}
