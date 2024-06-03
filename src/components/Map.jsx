import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useHotel } from "../context/HotelsProvider";
import { useState } from "react";

function Map() {
  const { hotelLoading, hotels } = useHotel();
  const [position, setPosition] = useState([48.4, 2.9]);
  return (
    <div className="mapContainer">
      <MapContainer
        center={position}
        className="map"
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {hotels.map((item) => (
          <>
            <Marker position={[item.latitude, item.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
