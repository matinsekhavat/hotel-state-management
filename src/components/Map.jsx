import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useHotel } from "../context/HotelsProvider";
import { useState } from "react";

function Map() {
  const { hotelLoading, hotels } = useHotel();
  const [position, setPosition] = useState([-26.37446, 29]);
  return (
    <div className="mapContainer">
      <MapContainer
        center={position}
        className="map"
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
