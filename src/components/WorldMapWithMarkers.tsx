"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon as DefaultIcon } from 'leaflet';
import { useEffect } from 'react';

const countries: { name: string; position: [number, number]; rugsSent: number }[] = [
  { name: 'Germany', position: [51.1657, 10.4515], rugsSent: 120 },
  { name: 'United States', position: [37.0902, -95.7129], rugsSent: 200 },
  { name: 'Turkey', position: [38.9637, 35.2433], rugsSent: 150 },
  { name: 'United Kingdom', position: [55.3781, -3.436], rugsSent: 80 },
  { name: 'France', position: [46.6034, 1.8883], rugsSent: 95 },
];

const WorldMapWithMarkers = () => {
  useEffect(() => {
    // Revert to default marker icon
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  }, []);

  return (
    <div className="w-full h-96 mb-12">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {countries.map((country, index) => (
          <Marker key={index} position={country.position}>
            <Popup>
              {country.name}: {country.rugsSent} rugs sent
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMapWithMarkers;
