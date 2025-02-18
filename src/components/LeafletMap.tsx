import { Box } from "@mui/material";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import CustomMarker from "./CustomMarker";

export const LeafletMap = () => {
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
      </MapContainer>
    </Box>
  );
};
