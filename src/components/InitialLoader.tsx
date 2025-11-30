"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Skip loading screen if already visited
      setIsLoading(false);
      return;
    }

    // Add all your critical image URLs here
    const imagesToPreload = [
      "/image ref.jpg", // Your hero background image
      // Add more images from your components
    ];

    // Preload images
    const imagePromises = imagesToPreload.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    // Wait for all images to load or timeout after 5 seconds
    Promise.race([
      Promise.all(imagePromises),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const handleLoadComplete = () => {
    // Mark as visited for this session
    sessionStorage.setItem("hasVisited", "true");
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <LoadingScreen
        imagesLoaded={imagesLoaded}
        onLoadComplete={handleLoadComplete}
      />
    );
  }

  return <>{children}</>;
}
