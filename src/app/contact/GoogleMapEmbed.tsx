"use client";

import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleMapEmbedProps {
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ location, zoom = 15 }) => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [mapUrl, setMapUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch the API key securely, e.g., from an environment variable
    // accessible only server-side and passed down, or via a dedicated API endpoint.
    // For this example, we'll simulate fetching/checking it.
    const fetchedApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''; // Use environment variable

    if (fetchedApiKey) {
      setApiKey(fetchedApiKey);
       const url = `https://www.google.com/maps/embed/v1/place?key=${fetchedApiKey}&q=${location.lat},${location.lng}&zoom=${zoom}`;
       setMapUrl(url);
    } else {
       console.warn("Google Maps API Key not found. Displaying placeholder.");
    }

    // Simulate loading delay or API key fetch time
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);

  }, [location.lat, location.lng, zoom]);


  if (isLoading) {
    return <Skeleton className="w-full h-[300px] md:h-[400px]" />;
  }

  if (!apiKey || !mapUrl) {
    // Fallback if API key is missing
     return (
      <div className="w-full h-[300px] md:h-[400px] bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-center px-4">
          Map cannot be displayed. <br/> (API key might be missing or invalid) <br/>
           <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
           >
             View on Google Maps
           </a>
        </p>
      </div>
     );
  }


  return (
    <iframe
      width="100%"
      height="400" // Adjust height as needed
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl}
      className="h-[300px] md:h-[400px]" // Match skeleton height
    >
    </iframe>
  );
};

export default GoogleMapEmbed;
