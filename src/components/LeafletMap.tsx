import { Box } from "@mui/material";
import { MapContainer, TileLayer, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import CustomMarker from "./CustomMarker";
import { LeafletMouseEvent } from "leaflet";

export const LeafletMap = () => {
  // TODO: will add the marker according to the locations that match our radius and category
  const AddLocationMarker = () => {
    const [position, setPosition] = useState<
      LeafletMouseEvent["latlng"] | null
    >(null);
    const map = useMapEvents({
      click(e: LeafletMouseEvent) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <CustomMarker position={position}>
        <Popup>Popup</Popup>
      </CustomMarker>
    );
  };

  return (
    <Box flex={1}>
      <MapContainer
        center={[49.276765, -122.917957]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CustomMarker position={[49.276765, -122.917957]}>
          <Popup>Popup</Popup>
        </CustomMarker>
        <AddLocationMarker />
      </MapContainer>
    </Box>
  );
};
