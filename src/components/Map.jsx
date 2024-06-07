import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map({ locations }) {
  const [position, setPosition] = useState([48.4, 2.9]);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
  }, [lat, lng]);

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
        <DetectClick />
        {locations.map((item) => (
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

//click handler
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  // no jsx return
  return null;
}
