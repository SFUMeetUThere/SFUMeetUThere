import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerUrl from "../assets/marker.svg";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode; // Content for inside the marker
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
  const customIcon = L.icon({
    iconUrl: MarkerUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;
