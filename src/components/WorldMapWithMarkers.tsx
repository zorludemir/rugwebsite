"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const countries: { name: string; position: [number, number]; rugsSent: number }[] = [
  { name: "Germany", position: [51.1657, 10.4515], rugsSent: 120 },
  { name: "United States", position: [37.0902, -95.7129], rugsSent: 200 },
  { name: "Turkey", position: [38.9637, 35.2433], rugsSent: 150 },
  { name: "United Kingdom", position: [55.3781, -3.436], rugsSent: 80 },
  { name: "France", position: [46.6034, 1.8883], rugsSent: 95 },
];

const WorldMapWithMarkers = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (mapRef.current && isMounted) {
      const map = L.map(mapRef.current, {
        minZoom: 2,
        maxZoom: 4,
      }).setView([20, 0], 3);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      countries.forEach((country) => {
        L.marker(country.position, { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`${country.name}: ${country.rugsSent} rugs sent`);
      });

      return () => {
        map.remove();
      };
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full h-96 mb-12 flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-96 mb-12" />;
};

export default WorldMapWithMarkers;
