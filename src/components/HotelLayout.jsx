import { Outlet } from "react-router-dom";
import Map from "./Map";
import { useHotel } from "../context/HotelsProvider";

function HotelLayout() {
  const { hotels } = useHotel();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map locations={hotels} />
    </div>
  );
}

export default HotelLayout;
