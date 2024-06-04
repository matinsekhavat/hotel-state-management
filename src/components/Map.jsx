import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotel } from "../context/HotelsProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Map() {
  const { hotelLoading, hotels } = useHotel();
  const [position, setPosition] = useState([48.4, 2.9]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    if (lat && lng) {
      console.log(lat, lng);
      setPosition([lat, lng]);
    }
  }, [lat, lng]);
  console.log(position);

  return (
    <div className="mapContainer">
      <MapContainer
        center={position}
        className="map"
        zoom={5}
        scrollWheelZoom={true}
        key={crypto.randomUUID()}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={position} />
        {hotels.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
